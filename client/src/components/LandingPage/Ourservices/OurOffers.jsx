import React, { useState } from "react";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  // CardMedia,
  Modal,
} from "@mui/material";
import Image1 from "../../Assets/WebHosting.png";
import Image2 from "../../Assets/virtual.png";
import Image3 from "../../Assets/Gaming.png";
// import { Link } from "react-router-dom";
const offersData = [
  {
    title: "Web Hosting",
    description: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Semper in in interdum in nunc. Faucibus sociis massa felis elit sit.",
    ],
    image: Image1,
    buttonText: "Order Now",
  },
  {
    title: "Virtual Machines",
    description: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Semper in in interdum in nunc. Faucibus sociis massa felis elit sit.",
    ],
    image: Image2,
    buttonText: "Order Now",
  },
  {
    title: "Game Servers",
    description: [
      "Lorem ipsum dolor sit amet consectetur.",
      "Semper in in interdum in nunc. Faucibus sociis massa felis elit sit.",
    ],
    image: Image3,
    buttonText: "Order Now",
  },
];

const OurOffers = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ background: "#EAF4FE", paddingBottom: "2%" }}>
      <div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            marginTop: "10%",
          }}>
          <Typography
            variant='h2'
            fontWeight={400}
            mt={5}
            fontFamily={"Roboto"}
            color='#180D5B'>
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
            marginBottom: "3%",
            marginTop: "1%",
          }}>
          What Do We Offer
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
        }}>
        {offersData.map((offer, index) => (
          <Card
            key={index}
            sx={{
              width: 370,
              height: 541,
              background: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderBottomLeftRadius: 70,
              borderTopRightRadius: 70,
              transition: "background 0.3s",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              color: "#180D5B",
              "&:hover": {
                background:
                  "linear-gradient(144.86deg, #251E78 0%, rgba(59, 49, 222, 0.51) 100%)",
                color: "#FFF",
              },
            }}>
            <Stack
              direction='row'
              spacing={2}
              width={62}
              height={62}
              sx={{ display: "flex", justifyContent: "center" }}>
              <img src={offer.image} alt={offer.title} width={52} height={52} />
            </Stack>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}>
              <Typography
                gutterBottom
                variant='h5'
                style={{
                  textAlign: "justify",

                  fontSize: 32,
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  wordWrap: "break-word",
                }}>
                {offer.title}
              </Typography>
              <Typography
                variant='body2'
                // color='textSecondary'
                component='p'
                style={{
                  width: 298,
                  textAlign: "center",

                  fontSize: 16,
                  fontFamily: "Roboto",
                  fontWeight: "400",
                  textTransform: "capitalize",
                  wordWrap: "break-word",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}>
                {offer.description}
              </Typography>
            </CardContent>
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
                onClick={handleOpen}
                style={{
                  cursor: "pointer",
                  top: 10,
                  position: "relative",
                  textAlign: "center",
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}>
                {offer.buttonText}
              </div>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <div
                  style={{
                    width: "776px",
                    height: "648px",
                    borderRadius: "70px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#FFFFFF",
                  }}>
                  <div>
                    <h2
                      style={{
                        fontFamily: "Roboto",
                        fontSize: "32px",
                        fontWeight: "700",
                        lineHeight: "38px",
                        letterSpacing: "0em",
                        textAlign: "center",
                      }}>
                      Thank you For Purchasing with us
                    </h2>
                  </div>
                  <div
                    style={{
                      // textAlign: "center",
                      padding: 4,
                      background: "#EAF4FE",
                      width: "521px",
                      height: "320px",
                      borderRadius: "30px",
                    }}>
                    <h2
                      id='simple-modal-title'
                      style={{
                        marginLeft: "2%",
                      }}>
                      Details
                    </h2>
                    <div id='simple-modal-description'>
                      <div
                        style={{
                          fontFamily: "Roboto",
                          fontSize: "24px",
                          fontWeight: "500",
                          lineHeight: "28px",
                          letterSpacing: "0em",
                          textAlign: "justified",
                          display: "flex",
                          justifyContent: "space-around",
                        }}>
                        {" "}
                        SSH:<span>admin@ip</span>
                      </div>
                      <div
                        style={{
                          ontFamily: "Roboto",
                          fontSize: "24px",
                          fontWeight: "500",
                          lineHeight: "28px",
                          letterSpacing: "-0.1em",
                          textAlign: "justified",
                          display: "flex",
                          justifyContent: "space-around",
                        }}>
                        {" "}
                        Name:<span>Abid Kareem</span>
                      </div>
                      <div
                        style={{
                          ontFamily: "Roboto",
                          fontSize: "24px",
                          fontWeight: "500",
                          lineHeight: "28px",
                          letterSpacing: "0em",
                          textAlign: "justified",
                          display: "flex",
                          justifyContent: "space-around",
                        }}>
                        {" "}
                        Expire:<span>2 year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurOffers;
