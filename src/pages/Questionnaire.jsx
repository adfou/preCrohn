import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import { QestionnairBodyLayout } from "../Components/Layout/index.mjs";
import { setCurrentSectionIndex, saveFormData } from '../store/slice/questionnaireSlice';
import { useNavigate, useParams } from 'react-router-dom';
const Questionnaire = ({ title, Data }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentSectionIndex = useSelector((state) => state.questionnaire.currentSectionIndex);
    const sectionTags = useSelector((state) => state.questionnaire.sectionTags);
    const { sectionTag } = useParams();

   
  
    useEffect(() => {
      const expectedSectionTag = sectionTags[currentSectionIndex]; // Get the expected sectionTag based on the currentSectionIndex
  
      // Check if the current sectionTag in the URL matches the expected sectionTag
      if (sectionTag !== expectedSectionTag) {
        // If not, navigate to the correct section
        navigate(`/${expectedSectionTag}`);
      }
    }, [sectionTag, currentSectionIndex, sectionTags, navigate]);
    return (
        <>
            {title ? <div className='title-content'><h1>{title}</h1></div> : ""}
            <Container className="my-4">
                <div className="">
                    <QestionnairBodyLayout 
                        data={Data} 
                        log={true} 
                     
                    />
                </div>
            </Container>
        </>
    );
};

export default Questionnaire;
