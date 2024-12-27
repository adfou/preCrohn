    import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner'; // Import Bootstrap Spinner for Loader
import { BodyPage } from "../Components/Layout/index.mjs";
import { CrohnRiskData, InfoModalData } from "../Data";
import { CardBehavior, CardHumain, ColorRiskCard, CardBehaviorCheck } from "../Components/Card/index";
import { InfoModal } from "../Components/Modal/InfoModal";
import {  Box, Button } from '@mui/material';
import { useRiskCalculation ,useParticipantProfile} from "../Hooks/index.mjs";
import { useNavigate } from 'react-router-dom';
const CrohnRisk = ({ title }) => {
    const navigate = useNavigate();
    const { RiskCalculation, response, loading, error } = useRiskCalculation(); // Use loading state
    const {profileData, loading:loadingProfileData, error:errorProfileData } = useParticipantProfile();
    const [open, setOpen] = useState(false);
    const [RiskData, setRiskData] = useState(false);
    const firtSetnance = "Based on the answers you provided to the questionnaires, your blood tests, and your stool tests,"
    const Diagnostics = (status) => {return "you have a "+status+" risk for Crohn’s disease "}
    const lastDiagnostics = (status,noStatus) => {return  "Out of 100 people like you, "+status+" will develop Crohn’s disease in their lifetime, and "+noStatus+" will not."} 
    const HumainSentnace = 'Your personal risk of developing Crohn’s disease is '
    const behaviors = [
        "You’re eating enough fruit",
        "You’re eating enough fiber",
        "You don’t eat too much sucrose (sugar)",
        "You're physically active",
        "You don't smoke",
    ];

    const Goodbehaviors = [
        "Eat more fruit",
        "Eat more fiber",
        "Eat less sucrose (sugar)",
        "Increase your physical activity",
        "Quit smoking"
    ];

    

    useEffect(() => {
        try {
            RiskCalculation(); // Trigger the risk calculation
        } catch (err) {
        }
    }, []);
    useEffect(() => {
       if(profileData){
       const state = profileData.state
       const role =profileData?.role
       const phase = profileData?.phase
       if(phase === 0 && state === 0){
        navigate("/login");
       }
       if(role === "3" &&phase !== 2 && state !== 0){
        
        //navigate("/login");
        }
       }
    }, [profileData]);
//profileData
    useEffect(() => {
        setRiskData(response)
    }, [response]);

    return (
        <>
            {title ? <div className='title-content'><h1>{title}</h1></div> : ""}

            <Container className='content-container'>
                {/* Loader Layer: Show loader when waiting for the response */}
                {loading && (
                    <div className="loader-overlay">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )}

                {/* Content Layer: Only show when not loading */}
                {!loading && (
                    <>
                        <BodyPage data={CrohnRiskData} />
                        <ColorRiskCard
                            riskLevel={RiskData?.CategorizeRisk}
                            firtSetnance={firtSetnance}
                            Diagnostics={Diagnostics}
                            lastDiagnostics={lastDiagnostics}
                        />
                        <CardHumain
                            HumainSentnace={HumainSentnace}
                            firtSetnance={firtSetnance}
                            Diagnostics={Diagnostics}
                            lastDiagnostics={lastDiagnostics}
                            riskPercentage={RiskData?.FinalRsultRound}
                        />
                        {RiskData &&<CardBehavior
                            title="Keep up the good work!"
                            subtitle="Great job! You reported behaviors that are associated with a lower risk for Crohn's disease:"
                            behaviors={behaviors}
                            data={RiskData?.["Test case results"]}
                        />}
                        {RiskData &&<CardBehaviorCheck
                            data={RiskData?.["Test case results"]}
                            title="Watch your risk drop"
                            subtitle="Check the boxes next to the behaviors below to see how these changes could reduce your risk of Crohn’s disease."
                            behaviors={Goodbehaviors}
                            RiskData={RiskData}
                            openMpdal={() => { setOpen(true); }}
                            riskPercentage={RiskData?.FinalRsultRound}
                            RiskLevel={RiskData?.CategorizeRisk} 
                            EmptyHumain={100-RiskData?.FinalRsultRound}
                            FilledHumans={RiskData?.FinalRsultRound
                            
                                
                            }
                            
                            
                        />}
                    </>
                )}

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10,mb:10 }}>
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
                    </Box>
            </Container>

            {open && (
                <InfoModal
                    open={open}
                    handleClose={() => { setOpen(false); }}
                    title="Lower your sucrose (sugar) intake"
                    content={InfoModalData.content}
                />
            )}
        </>
    );
};

export default CrohnRisk;
