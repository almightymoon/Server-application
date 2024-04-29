import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import GridViewIcon from "@mui/icons-material/GridView";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import GroupIcon from "@mui/icons-material/Group";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box } from "@mui/material";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton
      sx={{
        color: "#64748B",
        gap: 4,
        "&:  hover": {
          color: "#3C34B6",
        },
        "&:active": { color: "#3C34B6" },
      }}>
      <GridViewIcon />
      <ListItemText primary='Dashboard' />
    </ListItemButton>
    <ListItemButton
      sx={{
        color: "#64748B",
        gap: 4,
        "&:  hover": {
          color: "#3C34B6",
        },
        "&:active": { color: "#3C34B6" },
      }}>
      <InsertChartOutlinedIcon />
      <ListItemText primary='Analytics' />
    </ListItemButton>
    <ListItemButton
      sx={{
        color: "#64748B",
        gap: 4,
        "&:  hover": {
          color: "#3C34B6",
        },
        "&:active": { color: "#3C34B6" },
      }}>
      <AddShoppingCartIcon />
      <ListItemText primary='Orders' />
    </ListItemButton>
    <ListItemButton
      sx={{
        color: "#64748B",
        gap: 4,
        "&:  hover": {
          color: "#3C34B6",
        },
        "&:active": { color: "#3C34B6" },
      }}>
      <GroupIcon />
      <ListItemText primary='User' />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <Box
      sx={{
        position: "relative",
        top: "180%",
      }}>
      <ListItemButton
        sx={{
          color: "#64748B",
          gap: 4,
          "&:  hover": {
            color: "#3C34B6",
          },
          "&:active": { color: "#3C34B6" },
        }}>
        <SettingsOutlinedIcon />

        <ListItemText primary='Setting' />
      </ListItemButton>
      <ListItemButton
        sx={{
          color: "#64748B",
          gap: 4,
          "&:  hover": {
            color: "#3C34B6",
          },
          "&:active": { color: "#3C34B6" },
        }}>
        <LogoutIcon />

        <ListItemText primary='Log Out' />
      </ListItemButton>
    </Box>
  </React.Fragment>
);
