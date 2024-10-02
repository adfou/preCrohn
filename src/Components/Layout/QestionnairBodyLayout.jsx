import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSectionIndex, saveFormData } from '../../store/slice/questionnaireSlice'; 
import parse from 'html-react-parser';
import { useCreateForm } from '../../Hooks/index.mjs';
import {

    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from '@mui/material';


import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import renderContent from "../../Data/renderContent"
// Custom styles for the Radio and Checkbox components
const customRadioStyles = {
    '& .MuiRadio-root': {
        color: 'white',
    },
    '& .MuiRadio-root.Mui-checked': {
        color: 'white',
    },
    '& .MuiRadio-root .MuiSvgIcon-root': {
        backgroundColor: 'white',
        borderRadius: '50%',
    },
};

const customCheckboxStyles = {
    '& .MuiCheckbox-root': {
        color: 'white',
    },
    '& .MuiCheckbox-root.Mui-checked': {
        color: 'white',
    },
    '& .MuiCheckbox-root .MuiSvgIcon-root': {
        backgroundColor: 'white',
    },
};


  

const Section = ({ section, log, handleChange, formData }) => {
    return (
        <Box component="section" sx={{ my: 4, display: 'flex', flexDirection: 'column' }}>
            {Object.entries(section).map(([key, value], index) => (
                <React.Fragment key={index}>
                    {renderContent(key, value, handleChange, formData)}
                </React.Fragment>
            ))}
        </Box>
    );
};

export const QestionnairBodyLayout = ({ data, log, type }) => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentSectionIndex = useSelector((state) => state.questionnaire.currentSectionIndex);
    const sectionTags = useSelector((state) => state.questionnaire.sectionTags);
    const savedData = useSelector((state) => state.questionnaire.data[sectionTags[currentSectionIndex]] || {});
    const { createForm, form, loading, error } = useCreateForm();

    useEffect(() => {
        if (Object.keys(savedData).length > 0) {
            setFormData(savedData); // Populate the form with saved data if it exists
        }
    }, [currentSectionIndex, savedData]);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevData => {
            if (type === 'checkbox') {
                const newValue = prevData[name] || [];
                if (checked) {
                    return { ...prevData, [name]: [...newValue, value] };
                } else {
                    return { ...prevData, [name]: newValue.filter(item => item !== value) };
                }
            } else {
                return { ...prevData, [name]: value };
            }
        });
    };

    const validateForm = () => {
        const formElement = document.getElementById('form');
    
        // Select all input, select, and textarea elements inside the form
        const formFields = formElement.querySelectorAll('input, select, textarea');
    
        const checkedRadioGroups = new Set(); // To track radio groups that have at least one checked button
        const checkedCheckboxGroups = new Set(); // To track checkbox groups that have at least one checked box
    
        for (const element of formFields) {
            const fieldName = element.name || element.id || 'Unnamed Field'; // Get field name or fallback to id or 'Unnamed Field'
            let fieldValue;
    
            if (element.type === 'checkbox') {
                // For checkboxes, check if at least one checkbox in the group is checked
                if (element.checked) {
                    checkedCheckboxGroups.add(element.name); // Mark the checkbox group as valid if one is checked
                }
            } else if (element.type === 'radio') {
                // For radio buttons, check if at least one in the group is checked
                if (element.checked) {
                    checkedRadioGroups.add(element.name); // Mark the radio group as valid if one is checked
                }
            } else {
                // For other input types, check if the value is empty
                fieldValue = element.value.trim();
                if (!fieldValue) {
                    console.log(`Field "${fieldName}" is empty!`);
                    return false;
                }
            }
        }
    
        // Check if all required radio groups have at least one selected option
        const radioGroups = formElement.querySelectorAll('input[type="radio"]');
        const uniqueRadioGroups = new Set(Array.from(radioGroups).map(r => r.name));
    
        for (const groupName of uniqueRadioGroups) {
            if (!checkedRadioGroups.has(groupName)) {
                console.log(`Radio group "${groupName}" has no selected option!`);
                return false;
            }
        }
    
        // Check if all required checkbox groups have at least one checked option
        const checkboxGroups = formElement.querySelectorAll('input[type="checkbox"]');
        const uniqueCheckboxGroups = new Set(Array.from(checkboxGroups).map(c => c.name));
    
        for (const groupName of uniqueCheckboxGroups) {
            if (!checkedCheckboxGroups.has(groupName)) {
                console.log(`Checkbox group "${groupName}" has no checked option!`);
                return false;
            }
        }
    
        console.log("All fields are valid.");
        return true;
    };
    
    
    const handleNext = () => {
      
        if (!validateForm()) {
            toast.error('Please fill out all fields .', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
       
        dispatch(saveFormData({ currentSectionIndex, data: formData }));
        if (currentSectionIndex < sectionTags.length - 1) {
            createForm(formData, currentSectionIndex);
            dispatch(setCurrentSectionIndex(currentSectionIndex + 1));
            setFormData({});
            navigate(`/${sectionTags[currentSectionIndex + 1]}`);
        }
    };

    const handleFinish = () => {
        if (!validateForm()) {
            toast.error('Please fill out all fields .', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        dispatch(saveFormData({ currentSectionIndex, data: formData }));
        navigate(`/crohn-risk`);
    };

    const handleBack = () => {
        if (currentSectionIndex > 0) {
            dispatch(setCurrentSectionIndex(currentSectionIndex - 1));
            navigate(`/${sectionTags[currentSectionIndex - 1]}`);
        }
    };

    return (
        <Container>
            <ToastContainer />
            <form id="form">
                {data.map((section, index) => (
                    <Section key={index} section={section} log={log} handleChange={handleChange} formData={formData}  />
                ))}

                {type === "fixe" ? (
                    <Button
                        variant="contained"
                        onClick={() => navigate("/disease-information")}
                    >
                        Continue to Crohn’s disease information
                    </Button>
                ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                        <Button variant="contained" onClick={handleBack} disabled={currentSectionIndex === 0}>
                            Back
                        </Button>
                        {currentSectionIndex < sectionTags.length - 1 ? (
                            <Button variant="contained" onClick={handleNext}>
                                Next
                            </Button>
                        ) : (
                            <Button variant="contained" onClick={handleFinish}>
                                Finish
                            </Button>
                        )}
                    </Box>
                )}
            </form>
        </Container>
    );
};