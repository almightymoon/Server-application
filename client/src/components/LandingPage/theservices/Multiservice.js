import React from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Image1 from "../../Assets/SuperFast.png";
import Image2 from "../../Assets/Unlimited.png";
import Image3 from "../../Assets/24-7.png";
import Image4 from "../../Assets/SSDRaid.png";
import Image5 from "../../Assets/99.99%.png";
import Image6 from "../../Assets/WebHosting.png";

const Multiservice = () => {
  const Component = [
    {
      images: Image1,
      name: "Super Fast Hosting",
    },
    {
      images: Image2,
      name: "Unlimited FTP Account",
    },
    {
      images: Image3,
      name: "24/7 Live Support",
    },
    {
      images: Image4,
      name: "SSD Raid 10 Storage",
    },
    {
      images: Image5,
      name: "99.99% UpTime",
    },
    {
      images: Image6,
      name: "Free Auto SSL",
    },
  ];

  return (
    <Container sx={{ marginTop: "0%" }}>
      <Grid container spacing={10}>
        {Component.map((item, index) => (
          <Grid item xs={4} key={index}>
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "Wrap",
                flexDirection: "row",
                gap: "10px",
                height: "100%",
              }}>
              <img
                src={item.images}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
              <Typography
                variant='body1'
                align='center'
                sx={{
                  marginTop: "6px",
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                  letterSpacing: " 0em",
                  textAlign: "left",
                }}>
                {item.name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Multiservice;
