import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Box } from "@mui/material";
// import IconButton from "@mui/icons-material/IconButton";
// import IconButton from "@mui/icons-material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from 'react-router-dom';
// <IconButton
// color='inherit'
// aria-label='open drawer'
// onClick={handleDrawerToggle}
// edge='start'
// sx={{ mr: 2, display: { xs: "block", sm: "none" } }}>
// <MenuIcon /> * Replace with a suitable icon (optional)
// </IconButton>
const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Box>ICON</Box>

      <Drawer
        variant='temporary'
        anchor='left'
        open={open}
        onClose={handleDrawerToggle}>
        <List>
          {["Inbox", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? <InboxIcon /> : <DraftsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          {/* Add more sidebar items with icons and links here */}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
