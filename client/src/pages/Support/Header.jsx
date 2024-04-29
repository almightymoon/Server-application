import React from "react";
import { Box, Typography } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import Input from "./input.jsx";
export default function Header() {
  return (
    <Box sx={{ background: "#fff" }}>
      <Box>
        <Typography
          variant='h1'
          textAlign={"center"}
          sx={{
            fontFamily: "Roboto",
            fontSize: "32px",
            fontWeight: "700",
            lineHeight: "37.5px",
            textAlign: "justified",
            paddingTop: "5%",
            paddingBottom: "3%",
          }}>
          Help Center
        </Typography>
        <Typography
          variant='p'
          textAlign={"center"}
          sx={{
            fontFamily: "Roboto",
            fontSize: "20px",
            fontWeight: "400",
            paddingBottom: "3%",
            color: "#09061E",
          }}>
          Explore our support hub for answers to your questions and <br></br>{" "}
          assistance with your social media experience.
        </Typography>
      </Box>
      <Box>
        <Input />
      </Box>
    </Box>
  );
}
