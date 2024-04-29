import React, { useReducer } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useForm } from "react-hook-form";

const initialState = {
  cardNumber: "",
  cardholderName: "",
  expiryDate: "",
  cvv: "",
  billingAddress: "",
  errors: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.message,
        },
      };
    case "CLEAR_ERRORS":
      return {
        ...state,
        errors: {},
      };
    default:
      return state;
  }
};

const PaymentForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleCardNumberChange = (event) => {
    // Implement validation and formatting here
    dispatch({
      type: "UPDATE_FIELD",
      field: "cardNumber",
      value: event.target.value,
    });
  };
  const handleExpiryDateChange = (event) => {
    // Implement validation and formatting here
    dispatch({
      type: "UPDATE_FIELD",
      field: "ExpiryDate",
      value: event.target.value,
    });
  };
  const handleCvvChange = (event) => {
    // Implement validation and formatting here
    dispatch({
      type: "UPDATE_FIELD",
      field: "cvv",
      value: event.target.value,
    });
  };

  const handleFormSubmit = () => {
    // Perform simulated payment processing here
    console.log("Form submitted:", state);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <TextField
        label='Card Number'
        {...register("cardNumber", {
          required: "Card number is required",

          // Add more validation rules here
        })}
        error={!!errors.cardNumber}
        helperText={errors.cardNumber?.message}
        onChange={handleCardNumberChange}
      />
      <Box>
        <TextField
          label='Expiry Date'
          {...register("expiryDate", {
            required: "Expiry Date is required",
            // Add more validation rules here
          })}
          error={!!errors.expiryDate}
          helperText={errors.expiryDate?.message}
          onChange={handleExpiryDateChange}
        />
        <TextField
          label='CVV'
          {...register("cvv", {
            required: "cvv is required",
            // Add more validation rules here
          })}
          error={!!errors.cvv}
          helperText={errors.cvv?.message}
          onChange={handleCvvChange}
        />
      </Box>
      {/* Other input fields with validation and error handling */}
      <Button type='submit' variant='contained'>
        Pay
      </Button>
    </form>
  );
};

export default PaymentForm;
