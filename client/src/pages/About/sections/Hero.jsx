import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../assets/about.png";
// import { AlignVerticalCenter } from "@mui/icons-material";
const Hero = () => {
  return (
    <div style={{ background: " #EAF4FE " }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-around",
          // gap: "50px",
        }}>
        <Box id='text' mt={22} width={500}>
          <Typography
            variant='h3'
            mb={12}
            sx={{
              color: "#180D5B",
              fontFamily: "Roboto",
              fontSize: "24px",
              fontWeight: "600",
              lineHeight: "28px",
              letterSpacing: "0em",
              textAlign: "justified",
            }}>
            About Us
          </Typography>
          <Typography
            variant='p'
            sx={{
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "23px",
              letterSpacing: "0em",
              textAlign: "justified",
            }}>
            Lorem ipsum dolor sit amet consectetur. Semper in in interdum in
            nunc. Faucibus sociis massa felis elit sit. Nunc netus risus
            scelerisque elit faucibus suscipit volutpat felis.
          </Typography>
        </Box>
        <Box id='image'>
          <Stack width={500} height={500} mt={12}>
            <img src={Image} alt='' />
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default Hero;
