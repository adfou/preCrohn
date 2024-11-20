import React, { useState, useEffect } from 'react';
import { Container, Box, Button, CircularProgress,Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSectionIndex, saveFormData } from '../../store/slice/questionnaireSlice'; 
import SaveIcon from '@mui/icons-material/Save';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import renderContent from "../../Data/renderContent";
import {useFinishForm,useCreateForm} from "../../Hooks/index.mjs"
import {Prefill,PrefillJaneCaseOne,PrefileJaneFiberCorrect,PrefilJaneFuitisCorrect,PrefileJoeFruitCorrect,PrefileJoeFiberCorrect} from "../../Data/index"
import {SetFormDataLogin} from "../../store/slice/questionnaireSlice" 
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
    const allFormData = useSelector((state) => state.questionnaire.data);
    
    const [isSaving, setIsSaving] = useState(false);
    const { createForm :CreateFormQuery, response,loading, error } =  useCreateForm();
    const { FinishForm :FinishFormQuery, response:responseFinish,loading:loadingFinish, error:errorFinish } =  useFinishForm();
    
    
    useEffect(() => {
        if (Object.keys(savedData).length > 0) {
            setFormData(savedData); // Populate the form with saved data if it exists
        }
    }, [currentSectionIndex, savedData]);

    useEffect(() => {
        console.log("error:",error)
        if (error && (error === 500 || error === 403 )) {
            navigate("/login");
           
        }
    }, [error]);
    

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
        const formFields = formElement.querySelectorAll('input, select, textarea');
        const checkedRadioGroups = new Set();
        const checkedCheckboxGroups = new Set();
        let isValid = true; // Assume the form is valid initially
    
        // Reset all fields to remove error indication
        formFields.forEach((field) => {
            field.classList.remove('error-field');
            const parentFieldset = field.closest('fieldset');
            const legend = parentFieldset?.querySelector('legend');
            if (legend) {
                legend.classList.remove('error-field'); // Remove error indication from legend
            }
        });
    
        // Validate each form field
        for (const element of formFields) {
            const parentFieldset = element.closest('fieldset');
            
           
            
            
    
            const fieldName = element.name || element.id || 'Unnamed Field';
    
            if (element.type === 'checkbox') {
                if (element.checked) {
                    checkedCheckboxGroups.add(element.name);
                } else {
                    const legend = parentFieldset?.querySelector('legend');
                    if (legend) {
                        legend.classList.add('error-field'); // Add error style to legend
                    }
                }
            } else if (element.type === 'radio') {
                if (element.checked) {
                    checkedRadioGroups.add(element.name);
                }
            } else if (element.type === 'text') {
                const fieldValue = element.value.trim();
                if (!fieldValue) {
                    console.log(`Text field "${fieldName}" is empty!`);
                    element.classList.add('error-field'); // Mark the empty field in red
    
                    const parentDiv = element.closest('.MuiFormControl-root');
                    const legend = parentDiv?.querySelector('legend');
                    if (legend && legend.textContent.includes("How old are you?")) {
                        legend.classList.add('error-field'); // Add error style to "How old are you?" legend
                    }
                    console.log("false 1 ")
                    isValid = false;
                }
            } else {
                // Additional handling for other input types (e.g., textarea, select)
                const fieldValue = element.value.trim();
                if (!fieldValue) {
                    console.log(`Field "${fieldName}" is empty!`);
                    element.classList.add('error-field'); // Mark the empty field in red
                    const legend = parentFieldset?.querySelector('legend');
                    if (legend) {
                        legend.classList.add('error-field'); // Add error style to legend
                    }
                    console.log("false 2 ")
                    
                    isValid = false;
                }
            }
        }
    
        // Handle radio group validation
        const radioGroups = formElement.querySelectorAll('input[type="radio"]');
        const uniqueRadioGroups = new Set(Array.from(radioGroups).map(r => r.name));
    
        for (const groupName of uniqueRadioGroups) {
            if (!checkedRadioGroups.has(groupName)) {
                const groupElements = formElement.querySelectorAll(`input[name="${groupName}"]`);
                const parentFieldset = groupElements[0]?.closest('fieldset');
                const legend = parentFieldset?.querySelector('legend');
                if (legend) {
                    legend.classList.add('error-field'); // Add error style to legend
                }
                console.log("groupElements:",parentFieldset)
                console.log("false 3 ")
                const isFieldsetNotRequired = parentFieldset?.classList.contains('not-required');
                console.log("isFieldsetNotRequired",isFieldsetNotRequired)
                    // Skip validation if the fieldset has the "not-required" class
                    if (isFieldsetNotRequired) {
                        continue;
                    }
                isValid = false;
            }
        }
    
        // Handle checkbox group validation
        const checkboxGroups = formElement.querySelectorAll('input[type="checkbox"]');
        const uniqueCheckboxGroups = new Set(Array.from(checkboxGroups).map(c => c.name));
    
        for (const groupName of uniqueCheckboxGroups) {
            if (!checkedCheckboxGroups.has(groupName)) {
                const groupElements = formElement.querySelectorAll(`input[name="${groupName}"]`);
                const parentFieldset = groupElements[0]?.closest('fieldset');
                const legend = parentFieldset?.querySelector('legend');
                if (legend) {
                    legend.classList.add('error-field'); // Add error style to legend
                }
                
                console.log("false 4 ")
                isValid = false;
            }
        }
    
        // Additional validation for specific tables
        const radioTable = document.querySelector('.radio-table');
        if (radioTable) {
            const rows = radioTable.querySelectorAll('tr');
            rows.forEach((row) => {
                const firstCell = row.querySelector('td');
                if (firstCell) {
                    firstCell.classList.remove('error-field'); // Reset error style
                }
    
                const radioButtons = row.querySelectorAll('input[type="radio"]');
                const isSelected = Array.from(radioButtons).some((radio) => radio.checked);
    
                if (!isSelected && firstCell) {
                    firstCell.classList.add('error-field'); // Add error style if no selection
                }
            });
        }
    
        const radioTableTwo = document.querySelector('.radio-table-two');
        if (radioTableTwo) {
            const rows = radioTableTwo.querySelectorAll('tr');
            rows.forEach((row) => {
                const secondCell = row.querySelectorAll('td')[1];
                if (secondCell) {
                    secondCell.classList.remove('error-field'); // Reset error style
                }
    
                const radioButtons = row.querySelectorAll('input[type="radio"]');
                const isSelected = Array.from(radioButtons).some((radio) => radio.checked);
    
                if (!isSelected && secondCell) {
                    secondCell.classList.add('error-field'); // Add error style if no selection
                    console.log("false 5 ")
                    isValid = false;
                }
            });
        }
    
        return isValid;
    };
    
    
    
    
    
    const handelFill = async () => {
        //Prefill
        dispatch(SetFormDataLogin({ data: Prefill }));
        location.reload();
    }
    
    const handelPrefileJaneFiberCorrect = async () => {
        
        dispatch(SetFormDataLogin({ data: PrefileJaneFiberCorrect }));
        location.reload();
    }
    const handelPrefilJaneFuitisCorrect = async () => {
        
        dispatch(SetFormDataLogin({ data: PrefilJaneFuitisCorrect  }));
        location.reload();
    }
    const handelPrefileJoeFruitCorrect = async () => {
        
        dispatch(SetFormDataLogin({ data: PrefileJoeFruitCorrect  }));
        location.reload();
    }
    const handelPrefileJoeFiberCorrect = async () => {
        
        dispatch(SetFormDataLogin({ data: PrefileJoeFiberCorrect  }));
        location.reload();
    }
    //
    //PrefileJoeFruitCorrect
    
    
    const handleSave = async () => {
      setIsSaving(true);  // Set loader to true
      try {
        // Call the API to save form data and await the response
        
        const updatedFormData = {
            ...allFormData,                          // Keep all previous sections' data
            [sectionTags[currentSectionIndex]]: formData // Update the current section's data
        };
        const response = await CreateFormQuery(updatedFormData); // No need to wrap in {}
    
        // Check if there's an error in the response
        if (response?.success) {
          // Dispatch to save the form data in Redux
          dispatch(saveFormData({ currentSectionIndex, data: formData }));
          
          // Display success message
          toast.success('Form has been saved Questionnaire!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          // If the response indicates failure, handle it
          throw new Error('Failed to save form data');
        }
      } catch (error) {
        // Log the error and show error toast
      
    
        toast.error('Error saving the Questionnaire. Please try again!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } finally {
        // Turn off the loader once the process is done
        setIsSaving(false);
      }
    };
    
    const handleNext =  () => {
     
          
        if (!validateForm()) {
            toast.error('Please fill out all fields.', {
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
        const updatedFormData = {
            ...allFormData,                          // Keep all previous sections' data
            [sectionTags[currentSectionIndex]]: formData // Update the current section's data
        };
        
        CreateFormQuery(updatedFormData);
   
    
        
        if (currentSectionIndex < sectionTags.length - 1) {
            dispatch(setCurrentSectionIndex(currentSectionIndex + 1));
            setFormData({});
            navigate(`/${sectionTags[currentSectionIndex + 1]}`);
        }
    };

    const handleFinish = () => {
        if (!validateForm()) {
            toast.error('Please fill out all fields.', {
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
        const updatedFormData = {
            ...allFormData,                          // Keep all previous sections' data
            [sectionTags[currentSectionIndex]]: formData // Update the current section's data
        };
       
        
        
        FinishFormQuery(updatedFormData);
        dispatch(saveFormData({ currentSectionIndex, data: formData }));
        navigate(`/optional-survey`);
    };

    const handleBack = () => {
        if (currentSectionIndex > 0) {
            dispatch(saveFormData({ currentSectionIndex, data: formData }));
            dispatch(setCurrentSectionIndex(currentSectionIndex - 1));
            const updatedFormData = {
                ...allFormData,                          // Keep all previous sections' data
                [sectionTags[currentSectionIndex]]: formData // Update the current section's data
            };
            
            CreateFormQuery(updatedFormData);
            navigate(`/${sectionTags[currentSectionIndex - 1]}`);
        }
    };

    return (
        <Container>
            <ToastContainer />
            {type === "fixe" ? (
                <>  
                <Typography variant="body1">This is an optional short (7 questions) survey that will help further our research. We greatly appreciate 
                you taking the survey, if you can.</Typography>
                    <div className='bigger-container' style={{paddingTop:"50px"}}>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/crohns-disease-information")}
                        className="button-survey bigger"   
                        
                    >
                        Continue to Crohn’s disease information 
                    </Button>
                    </div>
                    </>
                ) :""}
            <form id="form">
                {data.map((section, index) => (
                    <Section key={index} section={section} log={log} handleChange={handleChange} formData={formData} />
                ))}

                {type === "fixe" ? (
                    <div className='bigger-container'>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/crohns-disease-information")}
                        className="button-survey bigger"   
                        
                    >
                        Continue to Crohn’s disease information
                    </Button>
                    </div>
                ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                        <Button className="button-survey" variant="contained" onClick={handleBack} disabled={currentSectionIndex === 0}>
                            Back
                        </Button>

                        {/* Save button next to Back */}
                        <Button
                            variant="contained"
                            className="button-survey"
                            color="primary"
                            onClick={handleSave}
                            disabled={isSaving}
                        >
                            {isSaving ? 'Saving...' : 'Save'}
                        </Button>

                        {currentSectionIndex < sectionTags.length - 1 ? (
                            <>
                            <Button className="button-survey" variant="contained" onClick={handleNext}>
                                Next
                            </Button>
                            
                        </>
                        ) : (
                            <Button className="button-survey" variant="contained" onClick={handleFinish}>
                                Finish
                            </Button>
                        )}
                    </Box>
                    
                )}
                {type === "fixe"? "": 
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4,gap:"10px" }}>
                            <Button className="button-survey" variant="contained" onClick={handelPrefilJaneFuitisCorrect}>
                            Fill Jane Fruits Correct
                            </Button>

                            <Button className="button-survey" variant="contained" onClick={handelPrefileJaneFiberCorrect}>
                            Fill Jane Fiber Correct
                            </Button>

                            <Button className="button-survey" variant="contained" onClick={handelPrefileJoeFruitCorrect}>
                            Fill Joe Fruits Correct
                            </Button>

                            <Button className="button-survey" variant="contained" onClick={handelPrefileJoeFiberCorrect}>
                            Fill Joe Fiber Correct
                            </Button>
                            </Box>}
            </form>
            
        </Container>
    );
};
