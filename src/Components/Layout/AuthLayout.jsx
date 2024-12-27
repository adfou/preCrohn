import React, { useState, useEffect } from 'react';
import { Box, Toolbar } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../Common/Admin/Header'; // Adjust the import path accordingly
import Sidebar from '../Common/Sidebar'; // Adjust the import path accordingly
import Footer from '../Common/Footer'; // Adjust the import path accordingly
import { Outlet } from 'react-router-dom';
import { useVerifyToken } from '../../Hooks/index.mjs'; // Import the custom hook
import Loader from '../../ui-component/Loader'; // Assuming Loader is the spinner component
const drawerWidth = 240; // Define the drawer width
import { Helmet } from 'react-helmet';
export const AuthLayout = () => {
  const [open, setOpen] = useState(true);
  const { loading, error, success, userRole } = useVerifyToken(); // Use custom hook
  const navigate = useNavigate(); // For navigation

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false); 

  useEffect(() => {
    // Only check userRole when it's available and success is true
    if (!loading && success) {
      if (userRole?.role === "1") {
      } else {
        //navigate('/login'); // Redirect to /login if not admin
      }
    }
  }, [userRole, loading, success, navigate]);

  // Display Loader while loading
  if (loading) {
    return <Loader />;
  }

  return (
    <Box sx={{ display: 'flex' }}>
        <Helmet>
                <title>Dashboard</title>
            </Helmet>
      <main className='login'>
      
        <Header onMenuClick={handleDrawerOpen} />
        <Sidebar open={open} onClose={handleDrawerClose} />
        
        <Box
          className='container-force'
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: '#eef1f6',
            height: "fit-content",
            marginTop: "64px",
            borderRadius: "24px",
            p: 3,
            marginLeft: open ? `${drawerWidth}px` : '0',
            transition: 'margin 0.3s',
            width: "calc(100% - 270px)",
            minHeight: "86%"
          }}
        >
         

          <Outlet /> {/* Render nested routes */}
        </Box>
      </main>
    </Box>
  );
};
