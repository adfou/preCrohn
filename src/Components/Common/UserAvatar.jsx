import React, { useState, useEffect } from 'react';
import { Avatar, Menu, MenuItem, Typography, Box, CircularProgress } from '@mui/material';
import { IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useVerifyToken } from '../../Hooks/index.mjs'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slice/authSlice'; // Adjust path to your authSlice
import LogoutModal from '../Modal/LogOutModal'; // Adjust path to your LogoutModal component
import { Nav } from 'react-bootstrap'; // Import Nav for Nav.Link

const UserAvatar = () => {
    const { loading, error, success, userRole } = useVerifyToken();
    const [anchorEl, setAnchorEl] = useState(null);
    const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility
    const [isLoggedIn, setIsLoggedIn] = useState(success); // Local state for login status
    const [isMobile, setIsMobile] = useState(false); // Detect mobile view
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLoggedIn(success);

        // Detect screen size
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        handleResize(); // Initialize on load
        window.addEventListener('resize', handleResize); // Add resize listener
        return () => window.removeEventListener('resize', handleResize); // Cleanup listener
    }, [success]);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogoutRequest = () => {
        setModalOpen(true); // Open modal when logout is requested
        handleMenuClose();
    };

    const handleLogoutConfirm = () => {
        dispatch(logout()); // Dispatch logout action
        setIsLoggedIn(false); // Reset isLoggedIn state
        navigate('/'); // Redirect to home page
        setModalOpen(false); // Close modal after logout
    };

    const handleLogin = () => {
        handleMenuClose();
        navigate('/login');
    };

    const handleProfile = () => {
        handleMenuClose();
        navigate('/profile'); // Corrected profile navigation
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                <CircularProgress size={24} />
            </Box>
        );
    }

    if (isMobile) {
        // Render a Nav.Link for mobile
        if(isLoggedIn){
            return(
            <>
            <Nav.Link onClick={handleProfile} className="mobile-avatar-link">
            Profile
            </Nav.Link>
            <Nav.Link onClick={handleLogoutRequest} className="mobile-avatar-link">
            Logout
        </Nav.Link></>)

        }else{
            return(
            <Nav.Link onClick={handleLogin} className="mobile-avatar-link">
            Login
        </Nav.Link>)
        }
        
    }

    // Render the default box for desktop
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }} className="avatar-menu">
            <IconButton onClick={handleMenuOpen} color="inherit">
                <Avatar sx={{ bgcolor: '#80AD03' }}>
                    <AccountCircle />
                </Avatar>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                {isLoggedIn ? (
                    <>
                        <MenuItem onClick={handleProfile}>Profile</MenuItem>
                        <MenuItem onClick={handleLogoutRequest}>Logout</MenuItem>
                    </>
                ) : (
                    <MenuItem onClick={handleLogin}>Login</MenuItem>
                )}
            </Menu>
            {error && (
                <Typography color="error" variant="caption" sx={{ ml: 1 }}>
                    {error}
                </Typography>
            )}

            {/* Logout Modal */}
            <LogoutModal
                open={modalOpen}
                onConfirm={handleLogoutConfirm} // Confirm logout and dispatch action
                onCancel={() => setModalOpen(false)} // Close modal on cancel
            />
        </Box>
    );
};

export default UserAvatar;
