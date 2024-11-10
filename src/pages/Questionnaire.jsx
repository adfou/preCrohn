import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import { QestionnairBodyLayout } from "../Components/Layout/index.mjs";
import { setCurrentSectionIndex, saveFormData } from '../store/slice/questionnaireSlice';
import { useVerifyToken } from '../Hooks/useVerifyToken'; 
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Questionnaire = ({ title, Data,type }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentSectionIndex = useSelector((state) => state.questionnaire.currentSectionIndex);
    const sectionTags = useSelector((state) => state.questionnaire.sectionTags);
    const { sectionTag } = useParams();
    const { loading: verifyingToken, error: verifyError,success:verifySucces ,userRole} = useVerifyToken();

    useEffect(() => {
        console.log("state:",userRole.state)
        if(userRole.state==="1"){
            if(userRole.role !=="1"){
                navigate('/profile?role='+userRole.role); 
            }   
        }
        
      }, [verifySucces]);
  
    useEffect(() => {
      const expectedSectionTag = sectionTags[currentSectionIndex]; // Get the expected sectionTag based on the currentSectionIndex
       
        
      // Check if the current sectionTag in the URL matches the expected sectionTag
      if (sectionTag !== expectedSectionTag) {
        // If not, navigate to the correct section
        //type
        if( type !== "fixe"){
        navigate(`/${expectedSectionTag}`);}
      }
    }, [sectionTag, currentSectionIndex, sectionTags, navigate]);
    return (
        <>
        <Helmet>
                <title>My PRE-Crohn’s Survey</title>
      </Helmet>
            {title ? <div className='title-content'><h1>{title}</h1></div> : ""}
            <Container className="my-4 qstn-body">
                <div className="">
                    <QestionnairBodyLayout 
                        data={Data} 
                        log={true} 
                        type={type}
                     
                    />
                </div>
            </Container>
        </>
    );
};

export default Questionnaire;
