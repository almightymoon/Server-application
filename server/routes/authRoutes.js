// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authJWT');
const { signup, signin } = require('../controllers/auth.controller');

router.post('/register', signup);
router.post('/login', signin);


router.get('/hiddencontent', verifyToken, (req, res) => {
  if (!req.user) {
    res.status(403).send({ message: 'Invalid JWT token' });
  } else if (req.user === 'admin') {
    res.status(200).send({ message: 'Congratulations! but there is no hidden content' });
  } else {
    res.status(403).send({ message: 'Unauthorised access' });
  }
});

module.exports = router;
