import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Checkbox, IconButton } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { riskLevels, riskColors } from "../../Data/Data";
import { InfoModal } from "../Modal/InfoModal";
import { behaviorContentDrop as behaviorContent } from "../../Data";

export const CardBehaviorCheck = ({ title, subtitle, behaviors, RiskLevel, EmptyHumain, riskPercentage, FilledHumans, data }) => {
  // State to manage which behaviors are checked
  const [CurrentPosition, setCurrentPosition] = useState("50%");
  const [checkedBehaviors, setCheckedBehaviors] = useState({});
  const [emptyHumans, setEmptyHumans] = useState(EmptyHumain);
  const [filledHumans, setFilledHumans] = useState(FilledHumans);
  const [greenHumans, setGreenHumans] = useState(0);

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
    if (behavior === "Eat less sucrose (sugar)" && data["Added sugar (grams/day)"] !== 1.5) {
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

  // Handle the change event for checkboxes
  const handleCheckboxChange = (behavior) => {
    setCheckedBehaviors((prevState) => ({
      ...prevState,
      [behavior]: !prevState[behavior], // Toggle the checked state
    }));
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
        <Grid container direction="column" spacing={1} className='behavor'>
          {filteredBehaviors.map((behavior, index) => (
            <Grid
              item
              key={index}
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ borderTop: '1px solid #597D0B', paddingBottom: 1, marginTop: "10px" }}
            >
              <Grid item container alignItems="center" xs={10}>
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
          <Grid item container alignItems="center" xs={5} justifyContent="left">
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
                          CURRENT RISK
                        </Typography>
                      </Box>

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

          <Grid item container alignItems="center" xs={5} justifyContent="left">
            <Grid item container alignItems="center" xs={10} justifyContent="left" className='title-container'>
              <Typography variant="h6" sx={{ color: '#117BA3', marginBottom: 0 }}>
                YOUR Lifetime risk
              </Typography>
            </Grid>

            <Grid item xs={9} sx={{ position: 'relative', display: 'flex', flexWrap: 'wrap', marginTop: "40px", rowGap: "4px" }} className='humain-container'>
              {/* Render empty humans */}
              {Array.from({ length: emeptyTimeless }).map((_, index) => (
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
              {Array.from({ length: riskPercentage }).map((_, index) => (
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
                <Typography sx={{ fontWeight: 'bold', color: "#117BA3 !important", fontSize: "22px", border: "2px solid", marginLeft: "9.5px" }}>
                  {riskPercentage}%
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
