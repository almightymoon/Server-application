/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signinGoogle } from "../../redux/actions/auth.js";
import { useDispatch } from "react-redux";

import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleOneTapLogin } from '@react-oauth/google';

import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import Authimg from "../../Assets/Authimg.png";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL }); 

    API.interceptors.request.use((req) => {
      if (localStorage.getItem("user")) {
        req.headers.Authorization = `Bearer ${JSON.parse(
          localStorage.getItem("user").token
        )}`;
      }

      return req;
    });

    const apiUrl =`${process.env.REACT_APP_BASE_URL}/auth/login`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          // role: // Add role if required by your API
        }),
      });
   
      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        // Save the token to local storage or session storage
        localStorage.setItem("token", token);
        navigate("/Admin"); // Navigate to dashboard or appropriate page
      }else {
        // Code for error response
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Login failed. Please try again.");
      }
    } catch (error) {
      if ("error",error.response) {
        // Handle API response error
        const errorData = await error.response.json();
        setErrorMessage(errorData.message || "Login failed. Please try again.");
      } else if (error.request) {
        // Handle request-level errors
        setErrorMessage(
          "An error occurred while connecting to the server. Please try again later."
        );
      } else {
        // Handle other unexpected errors
        console.error("Other error:", error);
        setErrorMessage(
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  };

  const dispatch = useDispatch();

 const handleGoogleLoginSuccess = (codeResponse) => {
  const accessToken = codeResponse.access_token;
  try {
    console.log("Access Token:", accessToken); // Check if the access token is received correctly
    dispatch(
      signinGoogle(accessToken, () =>
        console.log("Successfully signed in with Google")
      )
    );

    // Redirect to the "/Admin" route upon successful sign-in
    navigate("/Admin");
  } catch (error) {
    console.log("Error:", error); // Log any errors that occur during dispatch
  }
};


  const login = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
    flow: "auth-code",
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    redirectUri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
    scope:
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    responseType: "code",
    prompt: "consent",
  });



  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        // background:
        //   " linear-gradient(180deg, rgba(37, 30, 118, 0.89) 0%, rgba(59, 49, 222, 0.56) 100%)",
      }}>
      <Paper
        component={"form"}
        onSubmit={handleSubmit}
        style={{
          padding: "3.5%",
          width: "70%",
          height: "85vh",
          flexWrap: "wrap",
          borderTopRightRadius: "40px",
          borderBottomRightRadius: "40px",
        }}>
        <button
          // onClick={handleGoback}
          style={{
            border: "none",
            display: "flex",
            background: "none",
            cursor: "pointer",
          }}>
          <ArrowBackIosIcon />
        </button>
        <Typography
          variant='h4'
          sx={{
            marginTop: "2%",
            fontFamily: "Roboto",
            fontSize: "36px",
            fontWeight: "600",
            lineHeight: "42px",
            letterSpacing: "0.14em",
            textAlign: "left",
          }}>
          Hi there!
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{
            marginTop: "2%",
            fontFamily: "Roboto",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "19px",
            letterSpacing: "0em",
            textAlign: "left",
          }}>
          Log in to your account
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "10%",
            flexWrap: "wrap",
          }}>
          <Grid item xs={12}>
            <Button
              width={"350px"}
              sx={{
                height: "45px",
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "18px",
                backgroundColor: "transparent",
                color: "#444",
                border: "1px solid #949494",
                borderRadius: "8px",
                padding: 2,
              }}>
              <Stack sx={{ color: "#316FF6", marginRight: "4px" }}>
                <FacebookTwoToneIcon />
              </Stack>
              Sign In with Facebook
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              width={"350px"}
              sx={{
                border: "1px solid #949494",
                borderRadius: "8px",
                height: "45px",
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "18px",
                backgroundColor: "transparent",
                color: "#444",
                padding: 2,
              }}
              onClick={() => login()}>
              <Stack sx={{ color: "#34A853", marginRight: "4px" }}>
                <svg
                  aria-hidden='true'
                  class='native svg-icon iconGoogle'
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'>
                  <path
                    fill='#4285F4'
                    d='M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z'></path>
                  <path
                    fill='#34A853'
                    d='M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z'></path>
                  <path
                    fill='#FBBC05'
                    d='M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z'></path>
                  <path
                    fill='#EA4335'
                    d='M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z'></path>
                </svg>
              </Stack>
              Sign In with Google
            </Button>
          </Grid>
        </Box>

        {/* Or */}
        <Typography variant='subtitle2' style={{ margin: "20px 0" }}>
          <Divider>Or </Divider>
        </Typography>

        {/* Email and Password Input */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2%",
          }}>
          <TextField
            label='Your Email'
            type='email'
            sx={{
              width: "615px",
              borderRadius: "8px",
              border: "1px solid #949494",
              background: "#FFF",
              // FONT Styles
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "16px",
              letterSpacing: "0.14em",
              textAlign: "left",
            }}
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
      <Box>
  <TextField
    label='Password'
    type='password'
    required
    style={{ marginTop: 20 }}
    sx={{
      width: '615px',
      borderRadius: '8px',
      border: '1px solid #949494',
      background: '#FFF',
      // FONT Styles
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '16px',
      letterSpacing: '0.14em',
      textAlign: 'left',
    }}
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    />
  {/* Display error message if errorMessage state is not null */}
  {/* Display error message if errorMessage state is not null */}
{errorMessage && (
  <Typography variant='body2' style={{ color: 'red', marginTop: 5 }}>
    {errorMessage}
  </Typography>
)}

  {/* Forgot Password */}
  <Typography
    variant='body2'
    style={{
      width: "615px",
      textAlign: "right",
      marginTop: 10,
      color: "#251E76",
    }}>
    Forgot Password?
  </Typography>
</Box>


          {/* Log In Button */}
          <Button
            type='submit'
            variant='contained'
            fullWidth
            style={{
              marginTop: 20,
              background:
                "linear-gradient(90.34deg, #251E76 32%, rgba(59, 49, 222, 0.76) 100%)",
              width: "625px",
              height: "48px",
              borderRadius: "8px ",
            }}>
            Log In
          </Button>
        </Box>
        {/* Sign Up Text */}
        <Typography
          variant='body2'
          style={{ textAlign: "center", marginTop: 10 }}>
          Don't have an account?
          <Link to={"/Signup"}>Sign Up</Link>
        </Typography>
      </Paper>
      <Box>
        <Stack
          sx={{
            position: "relative",
            right: "38%",
          }}>
          <img src={Authimg} alt='' />
        </Stack>
      </Box>
    </div>
  );
}

export default Login;
