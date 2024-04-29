import { Container, Typography } from "@mui/material";
import React from "react";

function Hero() {
  return (
    <div
      style={{
        background: "#EAF4FE",
        textAlign: "center",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}>
        <Typography
          variant='h3'
          fontSize='32px'
          fontWeight='700'
          fontStyle='Roboto'
          color='#180DFB'
          lineHeight='36px'>
          Choose You Right Hosting Plan
        </Typography>
        <Typography
          variant='p'
          fontSize='24px'
          fontWeight='400'
          fontStyle='Roboto'
          color='#09061E'
          lineHeight='28px'
          textAlign='center'
          width={530}>
          Select the perfect hosting plan for your needs and get started on your
          online journey with ease.
        </Typography>
      </Container>
    </div>
  );
}

export default Hero;
