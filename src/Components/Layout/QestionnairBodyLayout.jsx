import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSectionIndex, saveFormData } from '../../store/slice/questionnaireSlice'; 
import parse from 'html-react-parser';

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
                                value={option}
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
                                        value={option}
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
export const QestionnairBodyLayout = ({ data, log }) => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentSectionIndex = useSelector((state) => state.questionnaire.currentSectionIndex);
    const sectionTags = useSelector((state) => state.questionnaire.sectionTags);
    const savedData = useSelector((state) => state.questionnaire[sectionTags[currentSectionIndex]]);
    const fullFormData = useSelector((state) => state.questionnaire);

    useEffect(() => {
        if (savedData) {
            setFormData(savedData);
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

    const handleNext = () => {
        
        dispatch(saveFormData({ currentSectionIndex, data: formData }));
    
        if (currentSectionIndex < sectionTags.length - 1) {
            dispatch(setCurrentSectionIndex(currentSectionIndex + 1));
            navigate(`/${sectionTags[currentSectionIndex + 1]}`);
        }
    };

    const handleFinish = () => {
        // Print full form data from Redux
        dispatch(saveFormData({ currentSectionIndex, data: formData }));
        console.log(formData)
      
    };

    const handleBack = () => {
        if (currentSectionIndex > 0) {
            dispatch(setCurrentSectionIndex(currentSectionIndex - 1));
            navigate(`/${sectionTags[currentSectionIndex - 1]}`);
        }
    };

    return (
        <Container>
            <form>
                {data.map((section, index) => (
                    <Section key={index} section={section} log={log} handleChange={handleChange} formData={formData} />
                ))}
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
            </form>
        </Container>
    );
};
