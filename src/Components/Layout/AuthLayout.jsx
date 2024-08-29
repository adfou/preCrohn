import React, { useState } from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from '../Common/Admin/Header'; // Adjust the import path accordingly
import Sidebar from '../Common/Sidebar'; // Adjust the import path accordingly
import Footer from '../Common/Footer'; // Adjust the import path accordingly
import { Outlet } from 'react-router-dom';

const drawerWidth = 240; // Define the drawer width

export const AuthLayout = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  
  return (
    <Box sx={{ display: 'flex' }}>
         <main className='login'>
      <Header onMenuClick={handleDrawerOpen} />
      <Sidebar open={open} onClose={handleDrawerClose} />
      <Box
      className='container-force'
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#eef1f6',
          height:"fit-content",
          marginTop:"64px",
          borderRadius:"24px",
          p: 3,
          marginLeft: open ? `${drawerWidth}px` : '0', // Adjust margin based on sidebar state
          transition: 'margin 0.3s', // Smooth transition for margin change
          width:"calc(100% - 270px)",
          minHeight:"86%"
        }}
      >
 
       
          <Outlet />
      
      
      </Box>
      </main>
    </Box>
  );
};
