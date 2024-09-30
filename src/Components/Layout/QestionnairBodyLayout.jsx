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

const renderContent = (key, value, handleChange, formData) => {
    switch (key) {
      case 'H2':
        return <Typography variant="h2">{value}</Typography>;
  
      case 'Text':
        return Array.isArray(value)
          ? value.map((text, index) => <Typography key={index} variant="body1">{parse(text)}</Typography>)
          : <Typography variant="body1">{parse(value)}</Typography>;
  
      case 'radio':
        const [radioQuestion, ...radioOptions] = value;
        return (
          <FormControl component="fieldset">
            <FormLabel component="legend">{radioQuestion}</FormLabel>
            <RadioGroup name={radioQuestion} onChange={handleChange} value={formData[radioQuestion] || ''}>
              {radioOptions.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={index.toString()} // Use index as the value
                  control={<Radio sx={customRadioStyles} />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        );
  
      case 'checkbox':
        const [checkboxQuestion, ...checkboxOptions] = value;
        return (
          <FormControl component="fieldset">
            <FormLabel component="legend">{checkboxQuestion}</FormLabel>
            {checkboxOptions.map((option, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    sx={customCheckboxStyles}
                    name={checkboxQuestion}
                    value={option}
                    checked={(formData[checkboxQuestion] || []).includes(option)}
                    onChange={handleChange}
                  />
                }
                label={option}
              />
            ))}
          </FormControl>
        );
  
      case 'checkboxKey':
        const [checkboxKeyQuestion, ...checkboxKeyOptions] = value;
        return (
          <FormControl component="fieldset">
            <FormLabel component="legend">{checkboxKeyQuestion}</FormLabel>
            {checkboxKeyOptions.map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body1">{item.label}</Typography>
                <RadioGroup
                  name={`${checkboxKeyQuestion}_${item.label}`} // Unique name for each age field
                  onChange={handleChange}
                  value={formData[`${checkboxKeyQuestion}_${item.label}`] || ''}
                >
                  {item.options.map((option, subIndex) => (
                    <FormControlLabel
                      key={subIndex}
                      value={subIndex.toString()}  // Use index as the value
                      control={<Radio sx={customRadioStyles} />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </Box>
            ))}
          </FormControl>
        );
  
      case 'input':
        return (
          <FormControl>
            <FormLabel>{value}</FormLabel>
            <TextField 
              variant="outlined" 
              sx={{ bgcolor: 'white' }} 
              name={value}
              value={formData[value] || ''}
              onChange={handleChange} 
            />
          </FormControl>
        );
  
      case 'inputKey':
        return (
          <FormControl>
            {value.map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <FormLabel>{item.label}</FormLabel>
                <TextField 
                  variant="outlined" 
                  sx={{ bgcolor: 'white' }} 
                  name={item.label}
                  value={formData[item.label] || ''}
                  onChange={handleChange} 
                />
              </Box>
            ))}
          </FormControl>
        );
  
      case 'ladderRadio':
        const [ladderQuestion, ladderOptions] = value;
        return (
          <FormControl component="fieldset">
            <FormLabel component="legend">{ladderQuestion}</FormLabel>
            <RadioGroup name={ladderQuestion} onChange={handleChange} value={formData[ladderQuestion] || ''}>
              {ladderOptions.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={index.toString()}  // Use index as the value
                  control={<Radio sx={customRadioStyles} />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        );
  
      case 'recreationalActivityTable':
        const { activities, weightTrainingActivities, timeRanges } = value;
        
        return (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Activity</TableCell>
                  {timeRanges.map((range, index) => (
                    <TableCell key={index}>{range}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {activities.map((activity, rowIndex) => (
                  <TableRow key={rowIndex}>
                    <TableCell>{activity}</TableCell>
                    {timeRanges.map((range, colIndex) => (
                      <TableCell key={colIndex}>
                        <FormControlLabel
                          control={
                            <Radio
                              name={activity}
                              value={colIndex.toString()}  // Use index (0-9) as the value
                              checked={formData[activity] === colIndex.toString()}
                              onChange={handleChange}
                            />
                          }
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
  
                {/* Weight Training Activities */}
                <TableRow>
                  <TableCell colSpan={11}>
                    <Typography variant="h6">Weight training or resistance exercises (e.g., free weights or machines)</Typography>
                  </TableCell>
                </TableRow>
  
                {weightTrainingActivities.map((weightActivity, rowIndex) => (
                  <TableRow key={rowIndex}>
                    <TableCell>{weightActivity}</TableCell>
                    {timeRanges.map((range, colIndex) => (
                      <TableCell key={colIndex}>
                        <FormControlLabel
                          control={
                            <Radio
                              name={weightActivity}
                              value={colIndex.toString()}  // Use index (0-9) as the value
                              checked={formData[weightActivity] === colIndex.toString()}
                              onChange={handleChange}
                            />
                          }
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
  
      case 'HTMLTEXT':
        return (
          <Box>
            {parse(value)}
          </Box>
        );
     
    case 'dairyFoodsTable':
            const { foods, timeRangesFood,title } = value;

            return (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>{title}</TableCell>
                                {timeRangesFood.map((range, index) => (
                                    <TableCell key={index}>{range}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {foods.map((food, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    <TableCell>{food}</TableCell>
                                    {timeRangesFood.map((range, colIndex) => (
                                        <TableCell key={colIndex}>
                                            <FormControlLabel
                                                control={
                                                    <Radio
                                                        name={food}
                                                        value={colIndex.toString()}  // Use index (0-9) as the value
                                                        checked={formData[food] === colIndex.toString()}
                                                        onChange={handleChange}
                                                    />
                                                }
                                            />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            );
       
    
    case 'FoodsTableTwo':

            const { foodsTwo = [], TwotimeRangesFood = [], titleTwo = '' } = value || {};  // Use default values to avoid undefined errors

            return (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>{titleTwo}</TableCell>
                                {TwotimeRangesFood.map((range, index) => (
                                    <TableCell key={index}>{range}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {foodsTwo.map((foodPair, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {/* Each row has two TableCells for the two foods */}
                                    <TableCell>{foodPair[0]}</TableCell>
                                    <TableCell>{foodPair[1]}</TableCell>
                                    {TwotimeRangesFood.map((range, colIndex) => (
                                        <TableCell key={colIndex}>
                                            <FormControlLabel
                                                control={
                                                    <Radio
                                                        name={`${foodPair[0]}_${foodPair[1]}`}
                                                        value={colIndex.toString()}  // Use index (0-9) as the value
                                                        checked={formData[`${foodPair[0]}_${foodPair[1]}`] === colIndex.toString()}
                                                        onChange={handleChange}
                                                    />
                                                }
                                            />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            );
    

    
    case 'radioButtonWithData': {
                const [mainQuestion, ...radioOptionsMany] = value;
                const selectedOption = formData[mainQuestion] || ''; // Track the selected option
          
                return (
                  <FormControl component="fieldset">
                    <FormLabel component="legend">{mainQuestion}</FormLabel>
                    <RadioGroup name={mainQuestion} onChange={handleChange} value={selectedOption}>
                      {radioOptionsMany.map((option, index) => {
                        const [optionLabel, ...optionDataArray] = option;
          
                        return (
                          <Box key={index}>
                            <FormControlLabel
                              value={optionLabel}
                              control={<Radio sx={customRadioStyles} />}
                              label={optionLabel}
                            />
          
                            {/* Conditionally render nested data when the option is selected */}
                            {selectedOption === optionLabel && optionDataArray.length > 0 && (
                              <Box sx={{ pl: 4 }}>
                                {optionDataArray.map((nestedData, nestedIndex) => {
                                  const [nestedKey, nestedValue] = Object.entries(nestedData)[0];
                                  return (
                                    <Box key={nestedIndex} sx={{ mt: 2 }}>
                                      {renderContent(nestedKey, nestedValue, handleChange, formData)}
                                    </Box>
                                  );
                                })}
                              </Box>
                            )}
                          </Box>
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                );
              }

    case 'button': {
                const [buttonText, buttonLink] = value;
                return (
                  <Button
                    variant="contained"
                    href={buttonLink} // Use href to navigate to the specified link
                    sx={{ my: 2, width: 'fit-content', padding: '8px 16px' }}
                    
                  >
                    {buttonText}
                  </Button>
                );
              }
    case 'radioFemale':
        const userSexAtBirth = useSelector((state) => state.questionnaire?.data?.["general-information"]?.["What is your sex assigned at birth?"]) || "";
        console.log("==========userSexAtBirth==========")
        console.log(userSexAtBirth)
        console.log("=============================")
    // Check if userSexAtBirth is "Female", only then render the birth control pill question
    if (userSexAtBirth === '1') {
        const [radioFemaleQuestion, ...radioFemaleOptions] = value;
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">{radioFemaleQuestion}</FormLabel>
                <RadioGroup name={radioFemaleQuestion} onChange={handleChange} value={formData[radioFemaleQuestion] || ''}>
                    {radioFemaleOptions.map((option, index) => (
                        <FormControlLabel
                            key={index}
                            value={index.toString()} // Use index as the value
                            control={<Radio sx={customRadioStyles} />}
                            label={option}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        );
    } else {
        // If not female, don't render anything or render a placeholder
        return null;
    }
    //
    default:
        return <Typography variant="body1">{value}</Typography>;
    }
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