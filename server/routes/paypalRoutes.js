const express = require("express");
const paypal = require('paypal-rest-sdk');

const router = express.Router();

paypal.configure({
    'mode': 'sandbox',
    'client_id': 'AUp_gsA6lNuSeKG4OGLmOpWybLux5YVgg4Vqxn2IkPWWozkMDOUx6YaXl904MNh1TO_yvD6Y5DJZ1CeA',
    'client_secret': 'EGh5t0eSCq2VhZWRIh5r-3JZrcPmmcNsLC8pl5u3WIpjf1sHhk1n5SrW9pRkrZmwx1aY_tz3Im6tEAe4'
});

router.get('/pay', (req, res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:5000/success",
            "cancel_url": "http://localhost:5000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "tuna",
                    "sku": "001",
                    "price": "25.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "25.00"
            },
            "description": "food for cats"
        }]
    };
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
                    res.redirect(payment.links[i].href);
                }
            }
        }
    });
});

router.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "25.00"
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            res.send('Payment successful!');
        }
    });
});

router.get("/cancel", (req, res) => res.send("Canceled"));

module.exports = router;
