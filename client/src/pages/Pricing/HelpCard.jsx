import { Button, Container, Typography } from "@mui/material";
import React from "react";

function HelpCard() {
  return (
    <div style={{ background: "#FFFFFF" }}>
      <Container
        sx={{
          width: "1170px",
          height: "356px",
          borderRadius: "70px",
          background: "#EAF4FE",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}>
        <Typography
          variant='h2'
          color='#180D5B'
          sx={{
            fontFamily: "Roboto",
            fontSize: "36px",
            fontWeight: "700",
            lineHeight: "42px",
            letterSpacing: "0em",
            textAlign: "justified",
          }}>
          Need More Help? Send Us A Note
        </Typography>
        <Typography
          variant='p'
          color='#09061E'
          sx={{
            fontFamily: "Roboto",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "23px",
            letterSpacing: "0em",
            textAlign: "center",
          }}>
          Select the perfect hosting plan for your needs and get started on your
          online journey with ease.
        </Typography>
        <Button
          sx={{
            width: "147px",
            height: "41px",
            borderRadius: "15px",
            background:
              "linear-gradient(98.88deg, #251E78 0%, rgba(59, 49, 222, 0.68) 100%)",
            color: "#ffffff",
          }}>
          Get Support
        </Button>
      </Container>
    </div>
  );
}

export default HelpCard;
