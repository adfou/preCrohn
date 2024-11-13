import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner'; // Import Bootstrap Spinner for Loader
import { BodyPage } from "../Components/Layout/index.mjs";
import { CrohnRiskData, InfoModalData } from "../Data";
import { CardBehavior, CardHumain, ColorRiskCard, CardBehaviorCheck } from "../Components/Card/index";
import { InfoModal } from "../Components/Modal/InfoModal";

import { useRiskCalculation ,useParticipantProfile} from "../Hooks/index.mjs";
import { useNavigate } from 'react-router-dom';
const CrohnRisk = ({ title }) => {
    const navigate = useNavigate();
    const { RiskCalculation, response, loading, error } = useRiskCalculation(); // Use loading state
    const {profileData, loading:loadingProfileData, error:errorProfileData } = useParticipantProfile();
    const [open, setOpen] = useState(false);
    const [RiskData, setRiskData] = useState(false);
    const firtSetnance = "Based on the answers you provided to the questionnaires, your blood tests, and your stool tests,"
    const Diagnostics = "you have a high risk for Crohn’s disease"
    const lastDiagnostics = "when compared to other people who have a family member with Crohn’s disease."
    const HumainSentnace = 'Your personal risk of developing Crohn’s disease is '
    const behaviors = [
        "You're physically active",
        "You don't smoke",
    ];

    const Goodbehaviors = [
        "Lower your sucrose (sugar) intake",
        "Increase your physical activity",
        "Quit smoking"
    ];

    useEffect(() => {
        try {
            RiskCalculation(); // Trigger the risk calculation
        } catch (err) {
            console.log("There is an error in calculation:", err);
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
        console.log("login")
        //navigate("/login");
        }
       }
    }, [profileData]);
//profileData
    useEffect(() => {
        console.log(response); // Log the response when it updates
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
                        <CardBehavior
                            title="Keep up the good work!"
                            subtitle="Great job! You reported behaviors that are associated with a lower risk for Crohn's disease:"
                            behaviors={behaviors}
                        />
                        <CardBehaviorCheck
                            title="Watch your risk drop"
                            subtitle="Check the boxes next to the behaviors below to see how these changes could reduce your risk of Crohn’s disease."
                            behaviors={Goodbehaviors}
                            openMpdal={() => { setOpen(true); }}
                            riskPercentage={RiskData?.FinalRsultRound}
                            RiskLevel={RiskData?.CategorizeRisk} 
                            EmptyHumain={100-RiskData?.FinalRsultRound}
                            FilledHumans={RiskData?.FinalRsultRound}
                            
                            
                        />
                    </>
                )}
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
