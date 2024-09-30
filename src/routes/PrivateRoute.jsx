import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from "../ui-component/Loader"; // Assuming Loader is the spinner component

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, loading  } = useSelector((state) => state.auth);
    const [simulatedLoading, setSimulatedLoading] = useState(true);

    

    useEffect(() => {
        // If loading is finished and the state has changed, ensure simulated loading stops
       
        if (!loading) {
            setSimulatedLoading(false);
        }
    }, [loading, isAuthenticated]); // Re-run if loading or isAuthenticated changes

    if (loading || simulatedLoading) {
        return <Loader />; // Show loader while loading or during simulated loading
    }

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
