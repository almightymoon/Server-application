import { Box, Grid, Stack, Typography } from "@mui/material";
import Image1 from "../assets/WhatweOffer.png";

import Image2 from "../assets/SuperFast.png";
import Image3 from "../assets/Unlimited.png";
import Image4 from "../assets/24-7.png";
import Image5 from "../assets/SSDRaid.png";
import Image6 from "../assets/99.99%.png";
import Image7 from "../assets/WebHosting.png";
import React from "react";

const Whatweoffer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "Wrap",
        background: "#FFFFFF",
        gap: "2%",
        padding: "4%",
      }}>
      <Box
        id='left'
        mt={4}
        sx={{ display: "flex", flexDirection: "column", gap: "5%" }}>
        <Typography variant='h2'>What We Offer</Typography>
        <Typography
          variant='p'
          sx={{
            fontFamily: "Roboto",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "23px",
            letterSpacing: "0em",
            textAlign: "justified",
            width: "456px",
          }}>
          Lorem ipsum dolor sit amet consectetur. Semper in in interdum in nunc.
          Faucibus sociis massa felis elit sit. Nunc netus risus scelerisque
          elit faucibus suscipit volutpat felis.
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
            width: "456px",
          }}>
          Lorem ipsum dolor sit amet consectetur. Semper in in interdum in nunc.
          Faucibus sociis massa felis elit sit. Nunc netus risus scelerisque
          elit faucibus suscipit volutpat felis.
        </Typography>
        <Stack
          sx={{
            width: "456px",
            height: "307px",
            borderRadius: "20px",
            boxShadow:
              "0px 0px 0px 0 rgba(148,0,211,1),9px 6px 0px -2px rgba(255,255,255,1),8px 6px 0px 2px rgba(49,44,145,1)",
          }}>
          <img
            src={Image1}
            alt='newimage'
            style={{
              width: "456px",
              height: "307px",
            }}
          />
        </Stack>
      </Box>
      <Box id='Right' width={"49%"} mt={4}>
        <Grid
          container
          gap={16}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "stretch",
          }}>
          <Box>
            <Stack>
              <img
                src={Image2}
                alt='iconicon'
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
              <Typography variant='p'>
                Lorem Ipsum Dolor Sit Amet<br></br> Consectetur. Semper in in
                <br></br>interdum.
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <img
                src={Image3}
                alt='iconicon'
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
              <Typography v='p'>
                Lorem Ipsum Dolor Sit Amet<br></br> Consectetur. Semper in in
                <br></br>interdum.
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <img
                src={Image4}
                alt='iconicon'
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
              <Typography v='p'>
                Lorem Ipsum Dolor Sit Amet<br></br> Consectetur. Semper in in
                <br></br>interdum.
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <img
                src={Image5}
                alt='iconicon'
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
              <Typography v='p' textAlign={"justify"}>
                Lorem Ipsum Dolor Sit Amet<br></br> Consectetur. Semper in in
                <br></br>interdum.
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <img
                src={Image6}
                alt='iconicon'
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
              <Typography v='p'>
                Lorem Ipsum Dolor Sit Amet<br></br> Consectetur. Semper in in
                <br></br>interdum.
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <img
                src={Image7}
                alt='iconicon'
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
              <Typography v='p'>
                Lorem Ipsum Dolor Sit Amet<br></br> Consectetur. Semper in in
                <br></br>interdum.
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Whatweoffer;
