import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

// Items Data listes blew

const pages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/About" },
  { name: "Pricing", path: "/Pricing" },
  { name: "Contact Us", path: "/ContactUs" },
];
const Screen = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor='left'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index} component={Link} to={page.path}>
              <ListItemIcon>
                <ListItemText>{page.name}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon color='white' />
      </IconButton>
    </React.Fragment>
  );
};

export default Screen;
