import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

export const MainLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet /> {/* Render the matched route's component */}
            </main>
            <Footer />
        </>
    );
};


