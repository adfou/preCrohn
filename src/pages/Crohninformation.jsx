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
    
            // Log the condition to see if it evaluates to true or false
            const condition = userRole.role === "2" && ((userRole.phase > 0) || (userRole.phase === 0 && userRole.state === "1"));
           
    
            setRole(userRole);
        }
    }, [userRole]);
    
    const handleButtonClick = () => {
        navigate('/crohn-risk');
    };

    return (
        <>
            <Helmet>
                <title>{"Disease Information Pre-crohn's"}</title>
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
                        style={{maxWidth:" 606px"}}
                    >
                        See your personalized risk of Crohn’s disease and ways to lower your risk
                    </Button>
                   
                )}
                
                {userRole && userRole.role === "3" &&  (userRole.phase === 2 && userRole.state === "1") && (
                    <Button 
                    onClick={handleButtonClick} 
                    variant="contained" 
                    color="primary" 
                    className="button-survey bigger"
                    style={{maxWidth:" 606px"}}
                >
                    See your personalized risk of Crohn’s disease and ways to lower your risk
                </Button>

                )}
                {userRole && userRole.role === "3" &&  (userRole.phase !== 2 || userRole.state !== "1") && (
                 
                 <Button 
                 href='/thank-you'
                 variant="contained" 
                 color="primary" 
                 className="button-survey bigger"
                 style={{maxWidth:" 606px"}}
                 onClick={() => navigate("/thank-you")}
             >
                 Finish
             </Button>

             )}

                   
                    </div>
                    {userRole && userRole.role === "2" && ((userRole.phase > 0) || (userRole.phase === 0 && userRole.state === "1")) && (
                    <div>
                    If you do not want to see this information, please <a href="/thank-you">exit now</a> and <a href="/contact">notify the study coordinator</a> that you no longer wish to see this information. 
                    </div>)}

                    

            </Container>
        </>
    );
};

export default DiseaseInformationPage;
