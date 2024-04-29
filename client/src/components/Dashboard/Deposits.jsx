import * as React from "react";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function Deposits() {
  return (
    <React.Fragment>
      <Typography component='number' variant='h5' textAlign={"left"} p={1}>
        Views
      </Typography>
      <Box display={"flex"} alignItems={"center"} p={1}>
        <Typography component='number' variant='h4'>
          7,265
        </Typography>
        <Typography color='text.secondary' variant='h6' sx={{ flex: 1 }}>
          +11.02%
        </Typography>
        <TrendingUpIcon />
      </Box>
    </React.Fragment>
  );
}
