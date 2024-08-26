// MainLayout.jsx or MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

export const MainLayout = ({ type }) => {
    console.log("type of ", type);
    return (
        <>
            <Header />
            <Box component="main" className={type} sx={{ flexGrow: 1, pt: 0, pb: 2 }}>
                <Outlet /> {/* Render the matched route's component */}
            </Box>
            <Footer />
        </>
    );
};
