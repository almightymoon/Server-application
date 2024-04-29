import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
import Image1 from "../../Assets/WebHosting.png";
import Image2 from "../../Assets/virtual.png";
import Image3 from "../../Assets/Gaming.png";

import Multiservice from "../theservices/Multiservice";

const Service = () => {
  const smallcards = [
    {
      images: Image1,
      title: "Web Hosting",
      price: "Starting At: 30$",
      description: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Semper in in interdum in nunc. Faucibus sociis massa felis elit sit.",
      ],
    },
    {
      images: Image2,
      title: "Virtual Machines ",
      price: "Starting At: 30$",
      description: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Semper in in interdum in nunc. Faucibus sociis massa felis elit sit.",
      ],
    },
    {
      images: Image3,
      title: "Game Servers  ",
      price: "Starting At: 30$",
      description: [
        "Lorem ipsum dolor sit amet consectetur.",
        "Semper in in interdum in nunc. Faucibus sociis massa felis elit sit.",
      ],
    },
  ];

  return (
    <div style={{ background: "#FFF", height: "500px" }}>
      <Container>
        <Grid container spacing={4}>
          {smallcards.map((item, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <Card
                sx={{
                  borderRadius: "20px",
                  position: "relative",
                  bottom: "59%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 4px 4px 0px #00000040",
                  transition: "background 0.3s",
                  "&:hover": {
                    background:
                      "linear-gradient(180deg, #251E78 4.26%, rgba(59, 49, 222, 0.54) 100%)",
                    color: "#FFFFFF",
                  },
                }}>
                <Card
                  sx={{
                    // border: "1px solid orange",
                    height: "110px",
                    width: "77px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "end",
                    borderRadius: "0 0 50px 50px",
                    background: "#48AFCB",
                  }}>
                  <Stack
                    direction='row'
                    spacing={2}
                    mb={1}
                    width={62}
                    height={62}
                    // border={1}
                    borderRadius={50}
                    alignItems={"center"}
                    justifyContent={"center"}
                    sx={{ background: "#FFF" }}>
                    <img
                      src={item.images}
                      alt={item.title}
                      width={46}
                      height={46}
                    />
                  </Stack>
                </Card>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Typography
                    variant='h6'
                    component='div'
                    sx={{
                      fontWeight: "700",
                      mb: 2,
                      fontFamily: "Roboto",
                      fontSize: "32px",
                      textAlign: "center",
                      "&:hover": {
                        color: "#FFF",
                      },
                    }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    fontFamily={"Roboto"}
                    textAlign={"center"}
                    lineHeight={"19px"}
                    width={"80%"}
                    display={"flex"}
                    justifyContent={"center"}
                    fontSize={"16px"}>
                    {item.description.join(" ")}
                  </Typography>
                </CardContent>
                <Typography
                  variant='body2'
                  fontFamily={"Roboto"}
                  textAlign={"center"}>
                  {item.price}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Multiservice />
    </div>
  );
};

export default Service;
