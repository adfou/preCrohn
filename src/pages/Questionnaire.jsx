import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import { QestionnairBodyLayout } from "../Components/Layout/index.mjs";
import { setCurrentSectionIndex, saveFormData } from '../store/slice/questionnaireSlice';

const Questionnaire = ({ title, Data }) => {
    const dispatch = useDispatch();
    const currentSectionIndex = useSelector((state) => state.questionnaire.currentSectionIndex);
    const sectionTags = useSelector((state) => state.questionnaire.sectionTags);

    const handleNext = (formData) => {
        console.log(formData)
        dispatch(saveFormData({ currentSectionIndex, data: formData }));
        
        if (currentSectionIndex < sectionTags.length - 1) {
            dispatch(setCurrentSectionIndex(currentSectionIndex + 1));
        }
    };

    const handleBack = () => {
        if (currentSectionIndex > 0) {
            dispatch(setCurrentSectionIndex(currentSectionIndex - 1));
        }
    };

    return (
        <>
            {title ? <div className='title-content'><h1>{title}</h1></div> : ""}
            <Container className="my-4">
                <div className="">
                    <QestionnairBodyLayout 
                        data={Data} 
                        log={true} 
                        onNext={handleNext} 
                        onBack={handleBack} 
                    />
                </div>
            </Container>
        </>
    );
};

export default Questionnaire;
