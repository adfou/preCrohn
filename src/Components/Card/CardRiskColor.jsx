import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const riskLevels = ["VERY LOW", "LOW", "SIMILAR", "HIGH", "VERY HIGH"];
const riskColors = {
  "VERY LOW": "#FCE7A0",
  "LOW": "#FFD990",
  "SIMILAR": "#FFC077",
  "HIGH": "#FA9B5F",
  "VERY HIGH": "#ED7837",
};

export const RiskCard = ({ riskLevel, firtSetnance, Diagnostics, lastDiagnostics}) => {
  // Calculate the vertical position for the "YOUR CURRENT RISK" box
  const riskIndex = riskLevels.indexOf(riskLevel);
  const riskBoxTopPosition = riskIndex * 55; // Adjust based on the height and spacing of each risk level box


  return (
    <Paper className="risk-card-container" elevation={3} sx={{ padding: 3, borderRadius: 2, backgroundColor: 'white',gap:"180px " }}>
      <Grid className="risk-card-grid" container spacing={2} sx={{ position: 'relative' }}>
        <Grid className="risk-card-levels" item xs={3} sx={{ position: 'relative' }}>
          {riskLevels.map((level, index) => (
            <Box
              key={level}
              sx={{
                backgroundColor: riskColors[level],
                textAlign: 'center',
               
                marginBottom: 1,
                height: '59px', // Adjust the height to match the design
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                fontSize:"15px",
                color:"black",
                fontWeight:"800"
              }}
              
            >
              {level}
              {level === riskLevel && (
                <Box 
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '100%',
                    transform: 'translateY(-50%)',
                    backgroundImage: 'url(/union.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
              
                    display: 'inline-block',
                
                  }}
                  className="pointer-container"
                >
                  <Typography variant="body2" sx={{ fontWeight: 'bold',color:"white !important" ,fontSize:"16px"}}>YOUR CURRENT RISK</Typography>
                </Box>
              )}
            </Box>
          ))}
        </Grid>
        <Grid item xs={9} sx={{ position: 'relative',  maxWidth:"401px !important" }} className="risk-card-description-container">
          <Box className="risk-card-description" sx={{ marginTop: `${riskBoxTopPosition + 10}px`,maxWidth:"401px",backgroundr:"red" }}>
            <Typography  className="risk-card-title" variant="h6" sx={{ color: '#006494', marginBottom: 1 }}>
              Current risk of Crohn’s disease
            </Typography>
            <Typography className="risk-card-text" variant="body1" sx={{ color: '#333' }}>
              {firtSetnance} <strong>{Diagnostics}</strong> {lastDiagnostics}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};


