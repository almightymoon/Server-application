import React from "react";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Box,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(102.68deg, #251E78 100%, #3831DE 91%)",
        color: "white",
        padding: "20px 0",
        paddingTop: "2%",
        paddingBottom: "2%",
      }}>
      <Container>
        <Grid container spacing={3} justifyContent={"space-between"}>
          <Grid
            item
            xs={12}
            sm={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "start",
            }}>
            <Typography variant='h6' width={50}>
              LOGO
            </Typography>
            {/* Replace with your logo */}
            <Box>
              <IconButton sx={{ color: "#FFF" }} width={30} height={30}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "#FFF" }} width={30} height={30}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: "#FFF" }} width={30} height={30}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={2} justifyContent={"center"} flexWrap={"wrap"}>
            <Typography variant='h6' mb={1}>
              Links
            </Typography>
            <Typography>
              <Link
                to={"/"}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}>
                Home
              </Link>
            </Typography>
            <Typography>
              <Link
                to={"/About"}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}>
                About Us
              </Link>{" "}
            </Typography>
            <Typography>
              <Link
                to={"/Pricing"}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}>
                Pricing
              </Link>
            </Typography>
            <Typography>
              <Link
                to={"/GetSupport"}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}>
                Get Support
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant='h6' mb={1}>
              Services
            </Typography>
            <Typography>Web Hosting</Typography>
            <Typography>Virtual Machines</Typography>
            <Typography>Game Servers</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' mb={1}>
              Address
            </Typography>
            <Typography variant='body2'>
              <IconButton sx={{ color: "#FFF" }}>
                <PhoneIcon fontSize='16px' />
              </IconButton>
              Phone: +92 1111111111
              <br />
              <IconButton sx={{ color: "#FFF" }}>
                <SendIcon />
              </IconButton>
              Email: example@gmail.com
              <br />
              <IconButton sx={{ color: "#FFF" }}>
                {" "}
                <HomeIcon />
              </IconButton>
              Sector B7, Gilgit
            </Typography>
          </Grid>
        </Grid>

        <Divider
          sx={{
            background: "#FFF",
          }}></Divider>
        <Typography
          variant='body2'
          style={{ marginTop: "10px", textAlign: "center" }}>
          Abid Kareem 2023. All Rights Reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
