import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { Divider } from "@mui/material-next";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { useCreditCardValidator } from "react-creditcard-validator";

const PaymanetCard = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [isCardValid, setIsCardValid] = useState(true);

  const {
    getCardNumberProps,
    // getCardImageProps,
    getCVCProps,
    getExpiryDateProps,
    meta: { erroredInputs },
  } = useCreditCardValidator({
    expiryDateValidator: (month, year) => {
      if (Number(year) > 2024) {
        return "Expiry Date Year cannot be greater than 2035";
      }
      return null;
    },
    // Callback to determine overall card validity
    onCardInput: (isComplete) => setIsCardValid(isComplete.isValid),
  });
  const [cardstate, setcardState] = useState({
    nameOnCard: "",
    emailCC: "",
  });

  const renderCardRequirements = () => {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Card sx={{ width: 500 }}>
            <CardHeader title='React Credit Card Validator' />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <label>Card Number</label>
                  <input
                    style={{
                      width: "475px",
                      height: "46px",
                      borderRadius: "8px",
                      border: "1px solid #ACACAC",
                      // FONTSTYE
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "12px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                    {...getCardNumberProps({
                      onChange: (e) =>
                        setcardState({
                          ...cardstate,
                          [e.target.name]: e.target.value,
                        }),
                    })}
                  />
                  <small>
                    {erroredInputs.cardNumber && erroredInputs.cardNumber}
                  </small>
                </Grid>
                <Grid item xs={6}>
                  <label>Valid Till</label>
                  <input
                    style={{
                      width: "233px",
                      height: "46px",
                      borderRadius: "8px",
                      border: "1px solid #ACACAC",
                      // FontSTYLE
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "12px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#ACACAC",
                    }}
                    {...getExpiryDateProps({
                      onChange: (e) =>
                        setcardState({
                          ...cardstate,
                          [e.target.name]: e.target.value,
                        }),
                    })}
                  />
                  <small>
                    {erroredInputs.expiryDate && erroredInputs.expiryDate}
                  </small>
                </Grid>
                <Grid item xs={6}>
                  <label>CVC</label>
                  <input
                    style={{
                      width: "233px",
                      height: "46px",
                      borderRadius: "8px",
                      border: "1px solid #ACACAC",
                      // FontSTYLE
                      fontFamily: "Roboto",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "12px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#ACACAC",
                    }}
                    {...getCVCProps({
                      onChange: (e) =>
                        setcardState({
                          ...cardstate,
                          [e.target.name]: e.target.value,
                        }),
                    })}
                  />
                  <small>{erroredInputs.cvc && erroredInputs.cvc}</small>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant='contained'
                    type='submit'
                    sx={{
                      backgroundColor: isCardValid ? "green" : "red",
                    }}
                    disabled={!isCardValid} // Disable if card is not valid
                  >
                    Pay Now
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </>
    );
  };

  const renderBankRequirements = () => {
    return (
      <>
        <FormLabel component='legend'>Bank Details:</FormLabel>
        <input type='text' placeholder='Bank Name' required />
        <input type='text' placeholder='Account Number' required />
        <input type='text' placeholder='Account Title' required />
        <Button type='submit' placeholder='Pay Now'>
          Pay Now
        </Button>
      </>
    );
  };

  return (
    <div
      style={{
        height: "1000px",
        maxWidth: "1440px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {/*  Payment Options */}
      <Container
        id='Paymet Option'
        sx={{
          background: "#fff",
          width: "720px",
        }}>
        <Typography variant='h2'>Payment</Typography>
        <Divider color='#ACACAC' height='2px'></Divider>

        <FormControl component='fieldset'>
          <FormLabel component='legend'>Pay With:</FormLabel>

          <RadioGroup
            aria-label='options'
            name='options'
            value={selectedValue}
            onChange={handleRadioChange}
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}>
            <FormControlLabel
              value='option1'
              control={<Radio />}
              label='Card'
            />
            <FormControlLabel
              value='option2'
              control={<Radio />}
              label='Bank'
            />{" "}
          </RadioGroup>

          {selectedValue === "option1" && renderCardRequirements()}
          {selectedValue === "option2" && renderBankRequirements()}
        </FormControl>
      </Container>

      {/*  Order Summary */}
      <Container
        id='order Summary'
        sx={{
          height: "1024px",
          background: "#EAF4FE",
          width: "720px",
        }}>
        <Typography
          variant='h2'
          sx={{
            fontFamily: "Roboto",
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "28px",
            letterSpacing: "-0.02em",
            textAlign: "left",
          }}>
          Order Summary
        </Typography>
        <Divider color='#ACACAC' height='2px'></Divider>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Typography
              variant='h4'
              sx={{
                fontFamily: "Roboto",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "22px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#09061E",
              }}>
              Web Hosting
            </Typography>
            <Typography
              variant='h5'
              sx={{
                fontFamily: "Roboto",
                fontSize: "18px",
                fontWeight: "400",
                lineHheight: "22px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#09061E",
              }}>
              $50
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Typography
              variant='h6'
              sx={{
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "400",
                lineHheight: "22px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#ACACAC",
              }}>
              Web Hosting
            </Typography>
            <Typography
              variant='h6'
              sx={{
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "400",
                lineHheight: "22px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#ACACAC",
              }}>
              Qty: 1
            </Typography>
          </Box>
        </Box>
        <Divider color='#ACACAC' height='2px'></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <TextField
            label='Promo code '
            type='text'
            inputProps={{ maxLength: 6 }}
          />
          <Button
            sx={{
              borderRadius: "8px",
              background: "#ACACAC",
              color: "#ffffff",
            }}>
            Apply
          </Button>
        </Box>
        <Divider color='#ACACAC' height='2px'></Divider>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography variant='h4'>SubTotal</Typography>
          <Typography variant='h5' color='initial'>
            $50
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography variant='h4'>Tax</Typography>
          <Typography variant='h5' color='initial'>
            $5
          </Typography>
        </Box>
        <Divider color='#ACACAC' height='2px'></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography
            variant='h4'
            color='#09061E'
            sx={{
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "22px",
            }}>
            Total
          </Typography>
          <Typography
            variant='h5'
            color='#09061E'
            sx={{
              fontFamily: "Roboto",
              fontSize: "36px",
              fontHeight: "500",
              lineHeight: "22px",
              letterSpacing: "0em",
              textAlign: "left",
            }}>
            $55
          </Typography>
        </Box>
        <Typography
          variant='h4'
          color='#ACACAC'
          sx={{
            fontFamily: "Roboto",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "22px",
            letterSpacing: "0em",
            textAlign: "left",
          }}>
          Including $2 as tax
        </Typography>
      </Container>
    </div>
  );
};

export default PaymanetCard;
