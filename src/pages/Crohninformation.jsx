import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { BodyPage } from "../Components/Layout/index.mjs";
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';
import { DiseaseInformation } from '../Data/Data';
import { useVerifyToken } from '../Hooks/index.mjs';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const DiseaseInformationPage = () => {
    const { loading, error, success, userRole } = useVerifyToken();
    const [Role, setRole] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (userRole) {
            console.log("userRole:", userRole);
    
            // Log the condition to see if it evaluates to true or false
            const condition = userRole.role === "2" && ((userRole.phase > 0) || (userRole.phase === 0 && userRole.state === "1"));
            console.log("Condition result:", condition);
    
            setRole(userRole);
        }
    }, [userRole]);
    
    const handleButtonClick = () => {
        navigate('/crohn-risk');
    };

    return (
        <>
            <Helmet>
                <title>{"DiseaseInformation Pre-crohn's"}</title>
            </Helmet>
            <div className='title-content'><h1> Crohn’s disease information</h1></div>

            <Container className='content-container'>
                <BodyPage data={DiseaseInformation} />
                <div className='bigger-container-option'>
                    
                {userRole && userRole.role === "2" && ((userRole.phase > 0) || (userRole.phase === 0 && userRole.state === "1")) && (
                    <Button 
                        onClick={handleButtonClick} 
                        variant="contained" 
                        color="primary" 
                        className="button-survey bigger"
                    >
                        See the results
                    </Button>
                )}
                
                {userRole && userRole.role === "3" &&  (userRole.phase === 2 && userRole.state === "1") && (
                    <Button 
                        onClick={handleButtonClick} 
                        variant="contained" 
                        color="primary" 
                        className="see-results-button"
                    >
                        See the results
                    </Button>
                )}

                    <Button 
                        href='/thank-you'
                        variant="contained" 
                        color="primary" 
                        className="button-survey bigger"  
                    >
                        Thank you 
                    </Button>
                    
                    </div>
            </Container>
        </>
    );
};

export default DiseaseInformationPage;
