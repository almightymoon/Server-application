import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters variant="dense">
        <IconButton
          size="large"
          aria-label="account of current user"
          color="inherit"
          edge="start"
          sx={{ mr: 2 }}
          // Add menu toggle functionality here (optional)
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          My Admin Dashboard
        </Typography>
        {/* Add user profile options here (optional) */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
