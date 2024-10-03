import {

    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from '@mui/material';
import { Container, Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, TextField, Button } from '@mui/material';
import parse from 'html-react-parser';
import { useSelector, useDispatch } from 'react-redux';

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
          <FormControl >
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
              <Box key={index} sx={{ mb: 2 ,height:"44px"}}>
                <FormLabel>{item.label}</FormLabel>
                <TextField 
                  variant="outlined" 
                  sx={{ bgcolor: 'white',height:"41px" }} 
                  name={item.label}
                  value={formData[item.label] || ''}
                  onChange={handleChange} 
                />
              </Box>
            ))}
          </FormControl>
        );
  
        case 'ladderRadio': {
          const [ladderQuestion, ladderOptions] = value;
        
          return (
            <FormControl component="fieldset" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <FormLabel component="legend" sx={{ mb: 2, textAlign: 'left' }}>{ladderQuestion}</FormLabel>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                {/* Left-side Labels */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mr: 2 }}>
                  {/* Reverse the ladder options */}
                  {ladderOptions.map((option, index) => (
                    <Typography key={index} sx={{ height: '40px', display: 'flex', alignItems: 'center' }}>
                      {ladderOptions.length - 1 - index} {/* Display the numbers from 10 to 0 */}
                    </Typography>
                  ))}
                </Box>
        
                {/* Radio Buttons */}
                <RadioGroup
                  name={ladderQuestion}
                  onChange={handleChange}
                  value={formData[ladderQuestion] || ''}
                  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '435px' }}  // Adjust the height to match your layout
                >
                  {/* Reverse the ladder options */}
                  {ladderOptions.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={(ladderOptions.length - 1 - index).toString()}  // Reverse the value for the radio button
                      control={<Radio sx={customRadioStyles} />}
                      label=""
                      sx={{ display: 'flex', justifyContent: 'center', height: '38px', }}  // Set the height to align with the text
                    />
                  ))}
                </RadioGroup>
        
                {/* Right-side Text */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', ml: 2, height: '435px',justifyContent:"space-between"  }}>
                  {/* Reverse the ladder options */}
                  {ladderOptions.map((option, index) => (
                    <Typography key={index} sx={{ height: '36px', display: 'flex', alignItems: 'center' }}>
                      {option}  {/* Display the text options in reversed order */}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </FormControl>
          );
        }
        
        
        
        
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
                    target="_blank"
                  >
                    {buttonText}
                  </Button>
                );
              }
    case 'radioFemale':
        const userSexAtBirth = useSelector((state) => state.questionnaire?.data?.["general-information"]?.["What is your sex assigned at birth?"]) || "";
        
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
    case 'RecuresiveQuestion': {
      const { inpute, recursiveContent, title } = value; // Destructure input, recursive content, and title
      const numberOfParents = parseInt(formData[inpute.key] || '0', 10); // Get the number input (default to 0)
    
      // Handle input change
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Limit the number to the max value
        if (parseInt(value, 10) <= inpute.max) {
          handleChange(e); // Call the parent handleChange function
        }
      };
    
      return (
        <Box>
          {/* Display the custom title */}
          
    
          {/* Input field for number of family members */}
          <FormControl>
            <FormLabel>{inpute.label}</FormLabel>
            <TextField
              type="number"
              variant="outlined"
              sx={{ bgcolor: 'white' }}
              name={inpute.key}
              value={numberOfParents}
              onChange={handleInputChange}
              inputProps={{ min: 0, max: inpute.max }} // Set the max value from inpute.max
            />

        {numberOfParents > 0 && (
                  <Typography variant="p" sx={{ mt: 1, color: 'gray',fontSize:"14px" }}>
                    Which family members have been diagnosed with Crohn’s disease, ulcerative colitis, or IBD-unclassified? (Select all that apply.)
                  </Typography>
                )}
          </FormControl>
    
          {/* Dynamically render the recursive questions based on the input number */}
          {Array.from({ length: numberOfParents }).map((_, index) => (
            <Box key={index} sx={{ mt: 4, p: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
       
    
              {/* Render each section inside the recursiveContent array */}
              {recursiveContent.map((section, sectionIndex) => (
                <Box key={sectionIndex} sx={{ mt: 2 }}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      {section.label.replace('index', `${index + 1}`)} {index + 1}
                    </FormLabel>
                    <RadioGroup
                      name={`${inpute.key}_${index}_${section.label}`} // Unique name using the index
                      value={formData[`${inpute.key}_${index}_${section.label}`] || ''}
                      onChange={handleChange}
                    >
                      {section.options.map((option, optionIndex) => (
                        <FormControlLabel
                          key={optionIndex}
                          value={optionIndex.toString()}
                          control={<Radio sx={customRadioStyles} />}
                          label={option}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      );
    }
    
    
    default:
        return <Typography variant="body1">{value}</Typography>;
    }
  };

export default renderContent;