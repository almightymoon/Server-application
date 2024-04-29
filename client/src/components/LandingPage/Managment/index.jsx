import React from "react";
import {
  Container,
  Typography,
  Box,
  // Paper,
  Stack,
  Button,
} from "@mui/material";

import Image2 from "../../Assets/antimalaware.png";
import Image1 from "../../Assets/powerssl.png";
import Image3 from "../../Assets/backup.png";
import Image4 from "../../Assets/filemanagment.png";

const FileManagement = () => {
  return (
    <div
      style={{
        background: "#EAF4FE",
        padding: "2%",
        marginTop: "5%",
      }}>
      <div>
        <Container>
          <Typography
            variant='h4'
            textAlign={"center"}
            fontWeight={700}
            fontSize={"48px"}
            lineHeight={"56px"}
            color={"#180D5B"}
            gutterBottom>
            File Management
          </Typography>
          <Typography
            variant='subtitle1'
            fontSize={"24px"}
            fontWeight={500}
            lineHeight={"28px"}
            color={"#0F0934"}
            textAlign={"center"}
            gutterBottom>
            Safe and Secure Web Hosting
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              // width: "100%",
              marginTop: "10%",
              justifyContent: "space-between",
            }}>
            <Box>
              <div
                elevation={5}
                style={{ padding: "16px", display: "flex", gap: "1%" }}>
                <Stack sx={{ display: "flex" }} style={{ display: "flex" }}>
                  <img src={Image1} alt='' width={40} height={40} />
                </Stack>
                <div>
                  <Typography variant='h6'>Powerful Auto SSL</Typography>{" "}
                  <Typography>
                    We are Providing Powerful SSL Which is Automatically On Your
                    Hosting
                  </Typography>
                </div>
              </div>

              <div
                elevation={3}
                style={{
                  display: "flex",
                  gap: "1%",
                  padding: "16px",
                  marginTop: "16px",
                }}>
                <Stack>
                  {" "}
                  <img src={Image2} alt='' width={40} height={40} />
                </Stack>
                <div>
                  <Typography variant='h6'>Anti Malware</Typography>
                  <Typography>
                    We Are Using Safe And Secure Anti-Virus For Our Storage
                  </Typography>
                </div>{" "}
              </div>

              <div
                elevation={3}
                style={{
                  display: "flex",
                  gap: "1%",
                  padding: "16px",
                  marginTop: "16px",
                }}>
                <Stack>
                  {" "}
                  <img src={Image3} alt='' width={40} height={40} />
                </Stack>
                <div>
                  <Typography variant='h6'>Backups</Typography>{" "}
                  <Typography>
                    We Are Taking Backup Of Your Data Every Week.
                  </Typography>
                </div>
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "self-start",
              }}>
              <img
                src={Image4}
                alt='Tasveern bila la janu'
                width={300}
                height={280}
                textAlign={"right"}
              />
              <Button
                width={140}
                height={40}
                sx={{
                  borderRadius: "15px",
                  color: "white",
                  marginTop: "2%",
                  background:
                    "linear-gradient(93.42deg, #251E78 12.93%, rgba(59, 49, 222, 0.51) 92.81%)",
                }}>
                Our Hosting
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default FileManagement;
