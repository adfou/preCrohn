import React, { useState ,useEffect} from 'react';
import { Box, Typography, Grid, Paper, Checkbox, IconButton } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { riskLevels, riskColors } from "../../Data/Data";
import { InfoModal } from "../Modal/InfoModal";
import { behaviorContentDrop as behaviorContent } from "../../Data";

export const CardBehaviorCheck = ({ title, subtitle, behaviors, RiskLevel, EmptyHumain, riskPercentage, FilledHumans, data,RiskData }) => {
  // State to manage which behaviors are checked
  const [CurrentPosition, setCurrentPosition] = useState("50%");
  const [NewRiskLevel,setNewRiskLevel] = useState(RiskLevel);
  const [checkedBehaviors, setCheckedBehaviors] = useState({});
  const [emptyHumans, setEmptyHumans] = useState( 100 - riskPercentage);  
  const [filledHumans, setFilledHumans] = useState(FilledHumans);
  const [greenHumans, setGreenHumans] = useState(0);
  const [riskPercentageNew, setriskPercentageNew]=useState(riskPercentage);
  const [NewcurrentRiskPosition,setNewcurrentRiskPosition] = useState(Math.floor((100 - riskPercentage) / 10) * 29);

  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const emeptyTimeless = 100 - riskPercentage;
  const currentRiskPosition = Math.floor(emeptyTimeless / 10) * 29;
  const riskLevel = RiskLevel;
  const riskIndex = riskLevels.indexOf(riskLevel);

  // Filter behaviors based on conditions
  const filteredBehaviors = behaviors.filter((behavior) => {
    if (behavior === "Eat more fruit" && data["Fruit (servings/day)"] !== 1) {
      return false;
    }
    if (behavior === "Eat more fiber" && data["Fiber (grams/day)"] !== 1) {
      return false;
    }
    if (behavior === "Eat less sucrose (sugar)" && data["Added sugar (grams/day)"] === 1) {
      return false;
    }
    if (behavior === "Increase your physical activity" && data["Physical activity (MET - hrs/wk)"] !== 1) {
      return false;
    }
    if (behavior === "Quit smoking" && data["Smoking Status"] !== 1.76) {
      return false;
    }
    return true;
  });

  const GoodbehaviorsCalculation = {
    "Eat more fruit":0.76,
    "Eat more fiber":0.54,
    "Eat less sucrose (sugar)":1,
    "Increase your physical activity":0.73,
    "Quit smoking":1.3
};
// fibber femal 0.63

const ReverseResultData = {
  "Quit smoking": "Smoking Status",
  "Increase your physical activity": "Physical activity (MET - hrs/wk)",
  "Eat more fruit": "Fruit (servings/day)",
  "Eat less sucrose (sugar)": "Added sugar (grams/day)",
  "Eat more fiber": "Fiber (grams/day)"
}
  // Handle the change event for checkboxes
  const handleCheckboxChange = (behavior) => {
    setCheckedBehaviors((prevState) => {
        const updatedCheckedBehaviors = {
            ...prevState,
            [behavior]: !prevState[behavior], // Toggle the checked state
        };
        
        // Log all checked fields
        const checkedFields = Object.keys(updatedCheckedBehaviors).filter(key => updatedCheckedBehaviors[key]);
        

        return updatedCheckedBehaviors;
    });

  
};
const getRiskCategory = (RR) => {
  if (RR < 0.25) {
    return "VERY LOW";
  } else if (RR >= 0.25 && RR < 0.75) {
    return "LOW";
  } else if (RR >= 0.75 && RR < 1.50) {
    return "SIMILAR";
  } else if (RR >= 1.50 && RR < 3.00) {
    return "HIGH";
  } else if (RR >= 3.00) {
    return "VERY HIGH";
  } else {
    return "INVALID RR";
  }
};
  // Open modal for specific behavior
  const handleOpenModal = (behavior) => {
    const content = behaviorContent[behavior];
    if (content) {
      setModalContent({ title: behavior, content: content.content });
      setOpen(true);
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
    setModalContent({ title: "", content: "" });
  };


  useEffect(() => {
    // Extract keys with true values
    const checkedKeys = Object.keys(checkedBehaviors).filter(key => checkedBehaviors[key]);
    console.log("checkedKeys:",checkedKeys)
    if (checkedKeys.length > 0) {
      let G48 = RiskData.G48; // Extract G48 from RiskData
      const TestCaseResults = RiskData['Test case results']
      console.log("1: G48 :",G48)
      // Loop over checkedKeys and log required information
      checkedKeys.forEach((key) => {
        console.log("===================")
        console.log(`Behavior: ${key}`);
        console.log("test data ",TestCaseResults[ReverseResultData[key]])
        G48 =G48/TestCaseResults[ReverseResultData[key]]
        console.log("===================")
        //console.log("GoodbehaviorsCalculation value:", TestCaseResults[key]);
        //console.log("RiskData.G48:", G48);
      });

      console.log("2: G48 :",G48)
      checkedKeys.forEach((key) => {

        G48 =G48*GoodbehaviorsCalculation[key]
        //console.log("GoodbehaviorsCalculation value:", TestCaseResults[key]);
        //console.log("RiskData.G48:", G48);
      });
     
      const newRR = G48/RiskData.Denominator
      const newRLR = newRR * RiskData["Step 2"]
      console.log(" newRR:",newRR)
      console.log(" newRLR:",newRLR)
      setNewRiskLevel(getRiskCategory(newRR))
      let  integerPart= newRLR | 0;
     
      const PoitionintegerPart = Math.floor((100 - integerPart) / 10) * 29
      
      setNewcurrentRiskPosition(PoitionintegerPart)
      //setEmptyHumans( 100 - integerPart) 
      
      setFilledHumans(FilledHumans-(FilledHumans - integerPart)) 
      setGreenHumans(FilledHumans - integerPart)
      setriskPercentageNew(integerPart)
    }

    else{
      setNewRiskLevel(RiskLevel)
      setNewcurrentRiskPosition(currentRiskPosition) 
      //setEmptyHumans( 100 - riskPercentage) 
      setFilledHumans(FilledHumans) 
      setriskPercentageNew(riskPercentage)
      setGreenHumans(0)
    }
  }, [checkedBehaviors]);
  


  return (
    <>
      <Paper
        className="behavor-card"
        elevation={3}
        sx={{
          paddingTop: "26px",
          paddingLeft: "33px",
          paddingRight: "53px",
          paddingBottom: "43px",
          borderRadius: 2,
          backgroundColor: 'white',
          marginTop: '20px',
        }}
      >
        <Typography
          className="risk-card-title"
          variant="h6"
          sx={{ color: '#006494', marginBottom: 1, fontWeight: "700" }}
        >
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: '#00796B', marginBottom: 2 }}>
          {subtitle}
        </Typography>
        <Grid container direction="column" spacing={1} className='behavor' sx={{marginBottom:"25px"}}>
          {filteredBehaviors.map((behavior, index) => (
            <Grid
              item
              key={index}
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ borderTop: '1px solid #597D0B', paddingBottom: 1, marginTop: "10px" }}
            >
              <Grid item container alignItems="center" xs={10} sx={{flexWrap:"nowrap"}}>
                <Checkbox
                  checked={!!checkedBehaviors[behavior]} // Check if the behavior is checked
                  onChange={() => handleCheckboxChange(behavior)} // Handle change
                  sx={{ color: '#597D0B', '&.Mui-checked': { color: '#597D0B' }, width: 24, height: 24, marginTop: '-2px' }}
                />
                <Typography variant="body1" sx={{ color: '#00796B', marginBottom: "0px !important", marginLeft: "10px" }}>
                  {behavior}
                </Typography>
              </Grid>
              <Grid item xs={2} container justifyContent="flex-end">
                <IconButton onClick={() => handleOpenModal(behavior)}>
                  <HelpOutlineIcon sx={{ color: '#597D0B', width: 30, height: 30 }} />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        </Grid>

        <Grid item container xs={10} alignItems="flex-start" justifyContent="space-between" className='mixed-component-container'>
          <Grid item container alignItems="center" xs={5} justifyContent="left" className='current-risk-bottom'>
            <Grid item container alignItems="center" xs={10} justifyContent="left" className='title-container'>
              <Typography variant="h6" sx={{ color: '#117BA3', marginBottom: 0 }}>
                Your current risk
              </Typography>
            </Grid>

            <Grid className="risk-card-levels mixed " item xs={10} sx={{ position: 'relative', marginTop: "40px", paddingLeft: "23.5px" }}>
              {riskLevels.map((level, index) => (
                <Box
                  key={level}
                  sx={{
                    backgroundColor: riskColors[level],
                    textAlign: 'center',
                    marginBottom: "7.5px",
                    height: '58px', // Adjust the height to match the design
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    fontSize: "15px",
                    color: "black",
                    fontWeight: "800",
                    maxWidth: "182px",
                  }}
                >
                  {level}
                  
                  {level === riskLevel && (
                    <>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '100%',
                          transform: 'translateY(-50%)',
                          backgroundImage: 'url(/union-3-clair.svg)',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          display: 'flex',
                          alignItems: 'center',
                          width: "139px",
                          height: "41px",
                          paddingLeft: "23px",
                          marginLeft: "12px",
                        }}
                        className="pointer-container"
                      >
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: "#80BBD1 !important", fontSize: "14px", marginBottom: "0px" }}>
                          CURRENT RISK 1
                        </Typography>
                      </Box>

                      
                    </>
                  )}
                  {level === NewRiskLevel && (
                    <>
                      

                      <Box
                        sx={{
                          position: 'absolute',
                          top: CurrentPosition,
                          left: '100%',
                          transform: 'translateY(-50%)',
                          backgroundImage: 'url(/union-3.svg)',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          display: 'flex',
                          alignItems: 'center',
                          width: "139px",
                          height: "41px",
                          paddingLeft: "23px",
                          marginLeft: "12px",
                          fontWeight: "700",
                        }}
                        className="pointer-container clear"
                      >
                        <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: "14px", marginBottom: "0px", color: "white !important" }}>
                          CURRENT RISK
                        </Typography>
                      </Box>
                    </>
                  )}
                </Box>
              ))}
            </Grid>
          </Grid>

          <Grid item container alignItems="center" xs={5} justifyContent="left" className='current-lifetime-bottom'>
            <Grid item container alignItems="center" xs={10} justifyContent="left" className='title-container'>
              <Typography variant="h6" sx={{ color: '#117BA3', marginBottom: 0 }}>
                YOUR Lifetime risk
              </Typography>
            </Grid>

            <Grid item xs={9} sx={{ position: 'relative', display: 'flex', flexWrap: 'wrap', marginTop: "40px", rowGap: "4px" }} className='humain-container'>
              {/* Render empty humans */}
              {Array.from({ length: emptyHumans }).map((_, index) => (
                <Box
                  key={`empty-${index}`}
                  component="img"
                  src="/humain empty.svg"
                  alt="Empty Human"
                  sx={{ width: 15, height: 25, margin: '2px' }}
                />
              ))}

              {Array.from({ length: greenHumans }).map((_, index) => (
                <Box
                  key={`filled-${index}`}
                  component="img"
                  src="/green humain.svg"
                  alt="Filled Human"
                  sx={{ width: 15, height: 25, margin: '2px' }}
                />
              ))}
              {Array.from({ length: filledHumans }).map((_, index) => (
                <Box
                  key={`filled-${index}`}
                  component="img"
                  src="/humain.svg"
                  alt="Filled Human"
                  sx={{ width: 15, height: 25, margin: '2px' }}
                />
              ))}
              <Box
                sx={{
                  position: 'absolute',
                  top: `${NewcurrentRiskPosition}px`, // Position based on the number of empty humans
                  left: '100%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  borderRadius: '4px',
                  display: 'inline-block',
                  textAlign: "center",
                  marginTop: "20px",
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundSize: "cover",
                  width: "128px",
                  zIndex:"999",
                  backgroundColor:"white"
                  
                }}
                className="pointer-container humain"
              >
                <Typography className='zabi' sx={{ fontWeight: 'bold', color: "#117BA3 !important", fontSize: "22px", border: "2px solid", marginLeft:"11px" }}>
                  {riskPercentageNew}%
                </Typography>
                <Box
                  sx={{
                    transform: 'translateY(-50%)',
                    backgroundImage: 'url(/union-3.svg)',
                    color: 'white',
                    display: 'inline-block',
                    textAlign: "center",
                    fontSize: '12px',
                    fontWeight: 'bold',
                    backgroundSize: "cover",
                    width: "128px",
                    padding: "9px",
                    paddingRight: "0px",
                  }}
                >
                  <Typography variant="body5" sx={{ fontWeight: 'bold', color: "white !important", fontSize: "14px", marginLeft: "8px" }}>
                    Lifetime risk
                  </Typography>
                </Box>
                
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: `${currentRiskPosition}px`, // Position based on the number of empty humans
                  left: '100%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  borderRadius: '4px',
                  display: 'inline-block',
                  textAlign: "center",
                  marginTop: "20px",
                  fontSize: '12px',
                  fontWeight: 'bold',
                  backgroundSize: "cover",
                  width: "128px",
                  
                }}
                className="pointer-container humain"
              >
                <Typography className='zabi' sx={{ fontWeight: 'bold', color: "rgb(17,123,163,0.5)!important", fontSize: "22px", border: "2px solid", marginLeft:"9.5px" }}>
                  {riskPercentage}%
                </Typography>
                <Box
                  sx={{
                    transform: 'translateY(-50%)',
                    backgroundImage: 'url(/union-3-clair.svg)',
                    backgroundColor:"white",
                    color: 'white',
                    display: 'inline-block',
                    textAlign: "center",
                    fontSize: '12px',
                    fontWeight: 'bold',
                    width: "128px",
                    padding: "9px",
                    paddingRight: "0px",
                    backgroundSize:"contain",
                    backgroundRepeat:"no-repeat"
                  }}
                >
                  <Typography variant="body5" sx={{ fontWeight: 'bold', color: "rgb(17,123,163,0.5)!important", fontSize: "14px", marginLeft: "8px" }}>
                    Lifetime risk 2
                  </Typography>
                </Box>
                
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* Info Modal */}
      {open && (
        <InfoModal
          open={open}
          handleClose={handleCloseModal}
          title={modalContent.title}
          content={modalContent.content}
        />
      )}
    </>
  );
};
