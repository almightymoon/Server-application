import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
// import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import Screen from "./Screen.jsx";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  // NavBar Color Change Function
  const [scrolled, setScrolled] = useState(false); // State to track scroll
  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up: remove event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check if user has scrolled down (you can adjust the threshold)
    if (window.scrollY > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  // change for Navbar at signup page
  const location = "";
  // const location = useLocation();
  const backgroundStyle =
    location.pathname === "/Signup"
      ? {
          color: "#000",
          border: "1px solid #444",
          background: "transparent",
        }
      : {
          color: "#FFF",
          background:
            "linear-gradient(180deg, rgba(37, 30, 118, 0.89) 0%, rgba(59, 49, 222, 0.56) 100%) ",
        };
  const loginbtn =
    location.pathname === "/Signup"
      ? {
          background:
            "linear-gradient(180deg, rgba(37, 30, 118, 0.89) 0%, rgba(59, 49, 222, 0.56) 100%) ",
          border: "none",
        }
      : {
          background: "transparent",
        };
  const logostyle =
    location.pathname === "/Login" ? { color: "black" } : { color: "#FFF" };

  // const navbarStyles = {
  //   // Your other styles for the navbar
  //   ...backgroundStyle,
  // };
  return (
    <React.Fragment>
      <AppBar
        sx={{
          backgroundColor: scrolled ? "#fff" : "transparent", // Change background color based on scroll
          boxShadow: "none",
          border: "none",
          display: "flex",
          // alignItems: "center/",
          // margin: "0 auto",
          // textAlign: "center",
        }}>
        <Toolbar>
          <StorageIcon
            style={logostyle}
            sx={{
              transform: "scale(2)",
              background: scrolled ? "#000" : "transparent",
            }}
          />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Jabbar
              </Typography>
              <Screen />
            </>
          ) : (
            <>
              <Tabs
                sx={{
                  margin: "0 auto",
                  textDecoration: "none",
                  color: "black",
                }}
                // indicatorColor='secondary'
                // textColor='#444'
                value={value}
                onChange={(e, value) => setValue(value)}>
                <Link to={"/"}>
                  <Box sx={{ color: "#000" }}>
                    <Tab label='Home' />
                  </Box>
                </Link>
                <Link to={"/About"}>
                  {" "}
                  <Box sx={{ color: "#000" }}>
                    {" "}
                    <Tab label='About Us' />{" "}
                  </Box>
                </Link>
                <Link to={"/Pricing"}>
                  {" "}
                  <Box sx={{ color: "#000" }}>
                    {" "}
                    <Tab label='Pricing' />
                  </Box>
                </Link>
                <Link to={"#"}>
                  {" "}
                  <Box sx={{ color: "#000" }}>
                    {" "}
                    <Tab label='Get Support' />
                  </Box>
                </Link>
              </Tabs>

              <Link to={"/Login"}>
                {" "}
                <Button
                  style={loginbtn}
                  sx={{
                    // marginLeft: "auto",
                    width: "124px         ",
                    height: "41px",
                    borderRadius: "15px",
                    border: scrolled
                      ? "2px solid #251E78"
                      : "2px solid #FFFFFF",
                    background: scrolled
                      ? "transparent"
                      : "linear-gradient(180deg, rgba(37, 30, 118, 0.89) 0%, rgba(59, 49, 222, 0.56) 100%)",
                    color: scrolled ? "#444" : "#FFFFFF",
                  }}
                  variant=''>
                  Login
                </Button>
              </Link>
              <Link to={"/Signup"}>
                <Button
                  style={backgroundStyle}
                  sx={{
                    marginLeft: "10px",
                    width: "124px         ",
                    height: "41px",
                    borderRadius: "15px",
                    border: "1px",
                    background: scrolled
                      ? "linear-gradient(180deg, rgba(37, 30, 118, 0.89) 0%, rgba(59, 49, 222, 0.56) 100%)"
                      : "#FFFFFF",
                    color: scrolled ? "#FFF" : "#000",
                  }}
                  variant=''>
                  SignUp
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
