import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import { QestionnairBodyLayout } from "../Components/Layout/index.mjs";
import { setCurrentSectionIndex, saveFormData } from '../store/slice/questionnaireSlice';
import { useVerifyToken } from '../Hooks/useVerifyToken'; 
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Questionnaire = ({ title, Data, type }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentSectionIndex = useSelector((state) => state.questionnaire.currentSectionIndex);
    const sectionTags = useSelector((state) => state.questionnaire.sectionTags);
    const { sectionTag } = useParams();
    const { loading: verifyingToken, error: verifyError, success: verifySucces, userRole } = useVerifyToken();
    const [isMobile, setIsMobile] = useState(false);

    // Detect if the user is on a mobile device
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the width threshold as needed
        };
        
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize); // Add listener for resize

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on unmount
        };
    }, []);

    useEffect(() => {
        if (userRole?.state === "1") {
            if (userRole.role !== "1" && type !== "fixe") {
                navigate('/profile?role=' + userRole.role); 
            }   
        }
    }, [verifySucces]);

    useEffect(() => {
        const expectedSectionTag = sectionTags[currentSectionIndex];
        
        if (sectionTag !== expectedSectionTag && type !== "fixe") {
            navigate(`/${expectedSectionTag}`);
        }
    }, [sectionTag, currentSectionIndex, sectionTags, navigate]);

    return (
        <>
            <Helmet>
                <title>My PRE-Crohn’s Survey</title>
            </Helmet>
            

            {isMobile ? (
                 <>
                {title ? <div className='title-content'><h1></h1></div> : ""}   
                <div className="mobile-message" style={{fontSize:"25px", padding:"35px ",marginTop:'0px'}}>
                    <h2 style={{fontSize:"30px",marginTop:'0px'}}>To take the survey, please use a laptop or desktop device.</h2>
                </div>
                </>
            ) : (
                <>
                {title ? <div className='title-content'><h1>{title}</h1></div> : ""}
                <Container className="my-4 qstn-body">
                    <div>
                        <QestionnairBodyLayout 
                            data={Data} 
                            log={true} 
                            type={type}
                        />
                    </div>
                </Container>
                </>
            )}
        </>
    );
};

export default Questionnaire;
