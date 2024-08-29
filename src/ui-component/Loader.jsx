// src/components/Loader.jsx
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1301,
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Light background overlay
    }}
  >
    <CircularProgress color="primary" />
  </Box>
);

export default Loader;
