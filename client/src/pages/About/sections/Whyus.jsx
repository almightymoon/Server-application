import React from "react";
import { Grid, Typography, Box, Stack } from "@mui/material";
import Image from "../assets/mujaqnikala.png";

const Whyus = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "rgba(234, 244, 254, 1)",
        marginTop: "2%",
        padding: "8%",
      }}>
      <Typography variant='h4' component='h2' gutterBottom>
        Why Us
      </Typography>
      <Stack
        sx={{
          borderRadius: "15px",
          boxShadow:
            "0px 0px 0px 0 rgba(148,0,211,1),9px 6px 0px -2px rgba(255,255,255,1),8px 6px 0px 2px rgba(49,44,145,1)",
        }}>
        <img src={Image} alt='Mujaq NIKALA' />
      </Stack>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10% ",
          flexWrap: "wrap",
          marginTop: "5%",
        }}>
        {[
          "Safe & Secure",
          "Secure Backups",
          "Up Time Guarantee",
          "Dedicated Support",
          "Best Price",
        ].map((text) => (
          <Box item xs={12} sm={6} md={4} lg={3} sx={{ marginTop: "4%" }}>
            <Box
              sx={{
                width: "350px",
                height: "219px",
                borderRadius: "15px",
                background: "rgba(255, 255, 255, 1)",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                padding: "3%",
              }}>
              <Box
                sx={{
                  width: "37px",
                  height: "37px",
                  borderRadius: "5px",
                  background: "rgba(72, 175, 203, 1)",
                }}></Box>
              <Typography variant='h6' component='h3'>
                {text}
              </Typography>
              <Typography>
                Lorem Ipsum Dolor Sit Amet Consectetur, Semper In Interdum In
                Nunc. Faucibus Sociis Massa Felis Elit Slt.
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default Whyus;
