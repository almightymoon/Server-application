import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "50%",
  padding: theme.spacing(1, 1, 1, 0), // Adjust padding as needed
  borderRadius: theme.shape.borderRadius,
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: "0.0075em",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.common,
  "& fieldset": {
    border: `1px solid ${theme.palette.divider}`, // Adjust border as needed
    borderRadius: theme.shape.borderRadius,
    boxShadow: "none", // Remove default box-shadow
  },
  "&:focus": {
    outline: "none",
    borderColor: theme.palette.primary.main, // Highlight on focus
  },
}));

export default function ResponsiveSearchInput() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <StyledTextField
      value={value}
      onChange={handleChange}
      placeholder='Search Your Key Word'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <IconButton onClick={handleClear}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      variant='outlined'
    />
  );
}
