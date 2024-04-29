import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Image1 from "../../Assets/Group 61.png";

const TwoColumnSection = () => {
  return (
    <Container sx={{ marginBottom: "7%", height: "650px" }}>
      <Grid container spacing={2}>
        {/* Text Column */}
        <Grid item xs={12} md={6} sx={{ marginTop: "18%" }}>
          <Typography
            variant='h3'
            color={"#FFF"}
            fontFamily={"Roboto"}
            fontSize={"70px"}
            fontWeight={700}>
            Hosting That
          </Typography>
          <Typography
            variant='h3'
            color={"#FFF"}
            fontWeight={700}
            fontSize={"70px"}>
            Helps You Grow
          </Typography>
          <Typography
            color={"#FFF"}
            fontFamily={"Roboto"}
            fontSize={"20px"}
            fontWeight={500}
            textAlign={"justify"}
            lineHeight={"23.44px"}
            mt={5}>
            Lorem ipsum dolor sit amet consectetur. Semper in in interdum in
            nunc. Faucibus sociis massa felis elit sit. Nunc netus risus
            scelerisque elit faucibus suscipit volutpat felis.
          </Typography>
        </Grid>

        {/* Image Column */}
        <Grid item xs={12} md={6} sx={{ marginTop: "18%" }}>
          <img
            src={Image1}
            alt='Your Alt Text'
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TwoColumnSection;
