import { Box, Card, Container, Stack, Typography } from "@mui/material";
// import Divider from "@mui/material-next/Divider";
import Divider from "@mui/material/Divider";

import React from "react";
import Image1 from "../assets/FullControl.png";
import Image2 from "../assets/Enjoy.png";
import Image3 from "../assets/HostingBackup.png";
// import { ContactEmergency } from "@mui/icons-material";

const Wemake = () => {
  return (
    <div style={{ flexWrap: "wrap", marginTop: "30px" }}>
      <Container>
        <Typography
          variant='h2'
          sx={{
            fontFamily: "Roboto",
            fontSize: "32px",
            fontWeight: "500",
            lineHeight: "38px",
            letterSpacing: "0em",
            textAlign: "center",
          }}>
          We Make It Easy For You To Outscore
        </Typography>
      </Container>
      <Container
        textAlign='center'
        sx={{
          marginBottom: "30px",
          width: "390px",
          background:
            "linear-gradient(180deg, #251E76 0%, rgba(59, 49, 222, 0.76) 100%)",
        }}>
        {" "}
        <Divider variant='middle' />
      </Container>
      <div style={{ display: "flex", gap: "20%", padding: "8%" }}>
        <Container>
          <Typography
            variant='h2'
            sx={{
              fontFamily: "Roboto",
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "38px",
              letterSpacing: "0em",
              textAlign: "justified",
              color: "rgba(24, 13, 91, 1)",
              marginBottom: "71px",
            }}>
            Full Controled
          </Typography>
          <Typography
            variant='p'
            sx={{
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "23px",
              letterSpacing: "0em",
              textAlign: "justify",
            }}>
            Lorem ipsum dolor sit amet consectetur. Semper in in interdum in
            nunc. Faucibus sociis massa felis elit sit. Nunc netus risus
            scelerisque elit faucibus suscipit volutpat felis. Faucibus sociis
            massa felis elit sit. Nunc netus risus scelerisque elit faucibus
            suscipit volutpat felis.
          </Typography>
        </Container>
        <Container>
          <Stack
            sx={{
              width: "456px",
              height: "307px",
              borderRadius: "20px",
              boxShadow:
                "0px 0px 0px 0 rgba(148,0,211,1),9px 6px 0px -2px rgba(255,255,255,1),8px 6px 0px 2px rgba(49,44,145,1)",
            }}>
            <img src={Image1} alt='' />{" "}
          </Stack>
        </Container>
      </div>
      <div
        style={{
          display: "flex",
          padding: "8%",
        }}>
        {" "}
        <div style={{ display: "flex", gap: "20%", padding: "8%" }}>
          <Stack
            sx={{
              width: "456px",
              height: "307px",
              borderRadius: "20px",
              boxShadow:
                "0px 0px 0px 0 rgba(148,0,211,1),9px 6px 0px -2px rgba(255,255,255,1),8px 6px 0px 2px rgba(49,44,145,1)",
            }}>
            <img src={Image2} alt='' />{" "}
          </Stack>
          <Box>
            <Typography
              variant='h2'
              sx={{
                fontFamily: "Roboto",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "38px",
                letterSpacing: "0em",
                textAlign: "justified",
                color: "rgba(24, 13, 91, 1)",
                marginBottom: "71px",
              }}>
              Enjoy pre configured Setup
            </Typography>
            <Typography variant='p'>
              Lorem ipsum dolor sit amet consectetur. Semper in in interdum in
              nunc. Faucibus sociis massa felis elit sit. Nunc netus risus
              scelerisque elit faucibus suscipit volutpat felis. Faucibus sociis
              massa felis elit sit. Nunc netus risus scelerisque elit faucibus
              suscipit volutpat felis.
            </Typography>
          </Box>
        </div>
      </div>{" "}
      <div
        style={{
          display: "flex",
          gap: "20%",
          padding: "8%",
        }}>
        {" "}
        <Container>
          <Typography
            variant='h2'
            sx={{
              fontFamily: "Roboto",
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "38px",
              letterSpacing: "0em",
              textAlign: "justified",
              color: "rgba(24, 13, 91, 1)",
              marginBottom: "71px",
            }}>
            Hosting & Backups
          </Typography>
          <Typography variant='p'>
            Lorem ipsum dolor sit amet consectetur. Semper in in interdum in
            nunc. Faucibus sociis massa felis elit sit. Nunc netus risus
            scelerisque elit faucibus suscipit volutpat felis. Faucibus sociis
            massa felis elit sit. Nunc netus risus scelerisque elit faucibus
            suscipit volutpat felis.
          </Typography>
        </Container>
        <Container>
          <Stack
            sx={{
              width: "456px",
              height: "307px",
              borderRadius: "20px",
              boxShadow:
                "0px 0px 0px 0 rgba(148,0,211,1),9px 6px 0px -2px rgba(255,255,255,1),8px 6px 0px 2px rgba(49,44,145,1)",
            }}>
            <img src={Image3} alt='' />{" "}
          </Stack>
        </Container>
      </div>
      <div
        style={{
          display: "flex",
          padding: "8%",
          justifyContent: "center",
        }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "90px",
            width: "100%",
          }}>
          <Card
            sx={{
              width: "570px",
              height: "343px",
              borderRadius: "20px",
              background: "rgba(234, 244, 254, 1)",
            }}>
            <Typography
              variant='h2'
              color='#180D5B'
              sx={{
                padding: "4%",
                fontFamily: "Roboto",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "38px",
                letterSpacing: "0em",
                // textAlign: "justified",
              }}>
              Our Mission
            </Typography>{" "}
            <Container>
              <Typography
                variant='p'
                color='#0F0934 '
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "23px",
                  letterSpacing: "0em",
                }}>
                Lorem ipsum dolor sit amet consectetur. Semper in in interdum in
                nunc. Faucibus sociis massa felis elit sit. Nunc netus risus
                scelerisque elit faucibus suscipit volutpat felis. Faucibus
                sociis massa felis elit sit. Nunc netus risus scelerisque elit
                faucibus suscipit volutpat felis.
              </Typography>
            </Container>
          </Card>
          <Card
            sx={{
              width: "570px",
              height: "343px",
              borderRadius: "20px",
              background: "rgba(234, 244, 254, 1)",
            }}>
            <Typography
              variant='h2'
              color='#180D5B'
              sx={{
                padding: "4%",
                fontFamily: "Roboto",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "38px",
                letterSpacing: "0em",
              }}>
              Our Vision
            </Typography>{" "}
            <Container>
              <Typography
                variant='p'
                color='#0F0934 '
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "23px",
                  letterSpacing: "0em",
                }}>
                Lorem ipsum dolor sit amet consectetur. Semper in in interdum in
                nunc. Faucibus sociis massa felis elit sit. Nunc netus risus
                scelerisque elit faucibus suscipit volutpat felis. Faucibus
                sociis massa felis elit sit. Nunc netus risus scelerisque elit
                faucibus suscipit volutpat felis.
              </Typography>
            </Container>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Wemake;
