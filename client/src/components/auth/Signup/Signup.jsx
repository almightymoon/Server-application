import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { signupGoogle } from "../../redux/actions/auth";
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
import { signUp } from ".";
function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const history = useHistory();
  const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.Authorization = `Bearer ${JSON.parse(
        localStorage.getItem("user").token
      )}`;
    }

    return req;
  });
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

    const apiUrl =`${process.env.REACT_APP_BASE_URL}/auth/register`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
         // role, // Add role to the request body
        }),
      });

      if (response.ok) {
        // Handle successful signup (e.g., redirect to login page or dashboard)
        console.log("Signup successful!");

        navigate("/Login"); // Use history to navigate to login page
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "Signup failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage(
        "An error occurred. Please try again later.",
        errorMessage
      );
      alert(errorMessage)

      alert("An error occurred. Please try again later!");
      
    }
  };
  const handleGoback = () => {
    navigate("/");
  };

  // const handleGoogleLoginSuccess = async (codeResponse) => {
  //   const accessToken = codeResponse.access_token;
  //   try {
  //     console.log("Access Token:", accessToken); // Check if the access token is received correctly
  //     // Dispatch action to sign in with Google
  //     dispatch(
  //       signupGoogle(accessToken, () =>
  //         console.log("Successfully signed in with Google")
  //       )
  //     );
  
  //     // Fetch user profile data from Google API using access token
  //     const googleProfileUrl = "https://www.googleapis.com/oauth2/v2/userinfo";
  //     const response = await fetch(googleProfileUrl, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     const userData = await response.json();
  
  //     // Extract user data from Google response
  //     const { given_name: firstName, family_name: lastName, email } = userData;
  //     console.log("User Data:", userData);
  //     // Send user data to your backend server to save in the database
  //     const apiUrl = `${process.env.REACT_APP_BASE_URL}/auth/register`;
  //     await fetch(apiUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         firstName,
  //         lastName,
  //         email,
  //         // You may want to handle password and role differently for Google login
  //         // password,
  //         // role,
  //       }),
  //     });
  
  //     // Redirect to the "/Admin" route upon successful sign-in
  //     navigate("/Admin");
  //   } catch (error) {
  //     console.log("Error:", error); // Log any errors that occur during dispatch
  //   }
  // };
  
  function handleGoogleLoginSuccess(tokenResponse) {
    const nagivate = useNavigate
    const accessToken = tokenResponse.access_token;

    dispatch(signupGoogle(accessToken,nagivate))
    navigate("/Admin");
}
  
  
    const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}>
      <Box>
        <Stack
          sx={{
            position: "relative",
            left: "31%",
          }}>
          <img src={Authimg} alt='' />
        </Stack>
      </Box>
      <Paper
        component='form'
        onSubmit={handleSubmit}
        style={{
          padding: "3.5%",
          width: "70%",
          height: "85vh",
          flexWrap: "wrap",
          borderTopLeftRadius: "40px",
          borderBottomLeftRadius: "40px",
        }}>
        <button
          onClick={handleGoback}
          style={{
            border: "none",
            display: "flex",
            background: "none",
            cursor: "pointer",
            position: "relative",
            left: "7%",
          }}>
          <ArrowBackIosIcon />
        </button>
        <Typography
          variant='h4'
          sx={{
            marginLeft: 10,
            marginTop: "2%",
            fontFamily: "Roboto",
            fontSize: "36px",
            fontWeight: "600",
            lineHeight: "42px",
            letterSpacing: "0.14em",
            textAlign: "left",
          }}>
          Create Account
        </Typography>

        <Box
          container
          spacing={2}
          sx={{
            marginLeft: 10,
            marginTop: 5,
            display: "flex",
            gap: "4%",
            justifyContent: "start",
            flexWrap: "wrap",
          }}>
          {/* New Account data */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "4% ",
              marginBottom: "2%",
            }}>
            <TextField
              label='First Name'
              type='firstname'
              sx={{
                width: "422px",
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
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <TextField
              label='Last Name'
              type='lastname'
              sx={{
                width: "422px",
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
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "2%",
            }}>
            <TextField
              label='Your Email'
              type='email'
              sx={{
                width: "850px",
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
                  width: "850px",
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <Box>
                <Button
                  type='submit'
                  variant='contained'
                  fullWidth
                  style={{
                    marginTop: 20,
                    background:
                      "linear-gradient(90.34deg, #251E76 32%, rgba(59, 49, 222, 0.76) 100%)",
                    width: "850px",
                    height: "48px",
                    borderRadius: "8px ",
                  }}>
                  Create Account
                </Button>
                <Typography variant='body2' style={{ marginTop: 10 }}>
                  Already have an account? <Link to={"/Login"}>Login</Link>
                </Typography>
              </Box>
              {/* Sign Up Text */}

              {/* Or */}
              <Typography variant='subtitle2' style={{ margin: "20px 0" }}>
                <Divider>Or </Divider>
              </Typography>

              {/*SINg with link */}
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
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
                    Sign Up with Facebook
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
                    onClick={login}>
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

                    Sign Up with Google
                  </Button>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}

export default Signup;
