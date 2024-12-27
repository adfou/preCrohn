import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutModal from '../../Modal/LogOutModal'; // Import the LogoutModal
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout as logoutAction } from '../../../store/slice/authSlice'; // Import the logout action

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false); // Logout modal state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle menu actions
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Logout functions
  const handleLogoutClick = () => {
    setLogoutModalOpen(true); // Open the modal
    handleMenuClose(); // Close the menu
  };

  const handleLogoutConfirm = () => {
    dispatch(logoutAction()); // Dispatch the logout action
    setLogoutModalOpen(false); // Close the modal
    navigate('/login'); // Navigate to the login page
  };

  const handleLogoutCancel = () => {
    setLogoutModalOpen(false); // Close the modal
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: "none", background: "transparent" }}
      className="zabi"
    >
      <Toolbar style={{ background: "white", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="/" style={{ textDecoration: 'none' }}>
          <Box
            component="img"
            src="/logo.svg" // Replace with your logo path
            alt="Logo"
            sx={{ width: 240, height: 40, cursor: "pointer" }}
          />
        </a>

        {/* Hamburger Menu */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ color: "black" }}
          className="button-admin-menu"
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleMenuClose}>
            <a href="/dashboard" style={{ textDecoration: 'none', color: 'inherit',fontWeight:"400" }}>
              Dashboard
            </a>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <a href="/Participants" style={{ textDecoration: 'none', color: 'inherit',fontWeight:"400" }}>
              Participation
            </a>
          </MenuItem>
          <MenuItem onClick={handleLogoutClick}>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>

      {/* Logout Modal */}
      <LogoutModal
        open={logoutModalOpen}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />
    </AppBar>
  );
};

export default Header;
