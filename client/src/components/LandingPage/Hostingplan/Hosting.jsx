import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Grid, Card } from "@mui/material";

const options = [
  {
    type: "Web Hosting",
    details: [
      {
        title: "Personal",
        price: "30$/Month",
        features: [
          "Hosting For 1 website",
          "4 GB SSD Raid 10 Storage",
          "10 GB Bandwidth/Mo",
          "3 Sub-Domain",
          "Free Auto SSL",
          "Unlimited FTP Account",
        ],
        buttonText: "Order Now",
      },
    ],
  },
  {
    type: "Virtual Machines",
    details: [
      {
        title: "Personal",
        price: "30$/Month",
        features: [
          "Hosting For 1 website",
          "4 GB SSD Raid 10 Storage",
          "10 GB Bandwidth/Mo",
          "3 Sub-Domain",
          "Free Auto SSL",
          "Unlimited FTP Account",
        ],
        buttonText: "Order Now",
      },
    ],
  },
  {
    type: "Game",
    details: [
      {
        title: "Personal",
        price: "30$/Month",
        features: [
          "Hosting For 1 website",
          "4 GB SSD Raid 10 Storage",
          "10 GB Bandwidth/Mo",
          "3 Sub-Domain",
          "Free Auto SSL",
          "Unlimited FTP Account",
        ],
        buttonText: "Order Now",
      },
    ],
  },
];

const HostingCards = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            marginTop: "1%",
          }}>
          <Typography
            variant='h2'
            fontWeight={400}
            mt={5}
            fontFamily={"Roboto"}
            color='#0F0934'>
            Our{" "}
          </Typography>
          <Typography
            variant='h2'
            mt={5}
            fontWeight={600}
            fontFamily={"Roboto"}
            color='#180D5B'>
            Service
          </Typography>
        </div>
        <Typography
          variant='h5'
          color='#0F0934'
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5%",
            marginTop: "1%",
          }}>
          What Do We Offer
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "25px",
        }}>
        <Typography
          variant='h4'
          sx={{ textDecoration: "underline", fontFamily: "Roboto" }}>
          Web Hosting{" "}
        </Typography>
        <Typography
          variant='h4'
          sx={{ textDecoration: "underline", fontFamily: "Roboto" }}>
          Virtual Machines
        </Typography>
        <Typography
          variant='h4'
          sx={{ textDecoration: "underline", fontFamily: "Roboto" }}>
          Game Servers{" "}
        </Typography>
      </div>
      {options.map((option, index) => (
        <Grid key={index}>
          <div />
          <div />

          {/* Loop through details */}
          {option.details.map((detail, idx) => (
            <Card
              key={idx}
              sx={{
                width: "371px",
                height: "602px",
                radius: "20px, 20px, 0px,0px",
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}>
              <Typography variant='h4' className='Personal'>
                {detail.title}
                <Typography variant='h4'> {detail.price}</Typography>
              </Typography>
              {/* Add other details */}
              <div>
                {" "}
                <ul>
                  <li>{detail.features}</li>
                </ul>
              </div>
              <div
                style={{
                  width: 124,
                  height: 49,
                  position: "relative",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}>
                <div
                  style={{
                    width: 124,
                    height: 49,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background:
                      "linear-gradient(99deg, #251E78 0%, rgba(59, 49, 222, 0.68) 100%)",
                    borderRadius: 15,
                  }}
                />
                <div
                  style={{
                    left: 28,
                    top: 10,
                    position: "absolute",
                    textAlign: "center",
                    color: "white",
                    fontSize: 20,
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}>
                  {options.buttonText}
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      ))}
    </div>
  );
};

export default HostingCards;
