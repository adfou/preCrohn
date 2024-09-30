import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ onMenuClick }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "none" }}>
      <Toolbar style={{ background: "white" }} >
        <a href="/" style={{ textDecoration: 'none' }}>
          <Box
            component="img"
            src="/logo.svg"  // Replace with your logo path
            alt="Logo"
            sx={{ width: 240, height: 40, mr: 2, cursor: "pointer" }}
          />
        </a>
        <Typography variant="h6" noWrap>
          {/* Optionally, add text here */}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
