import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

export const CardHumain = ({ HumainSentnace, firstSentence, diagnostics, lastDiagnostics, riskPercentage,greenHumain =0}) => {
  const filledHumans = riskPercentage;
  const emptyHumans = 100 - filledHumans;


  // Calculate the position where "YOUR CURRENT RISK" should be placed
  const currentRiskPosition = Math.floor(emptyHumans / 10) * 29; // Adjust this multiplier based on your spacing

  return (
    <Paper className="risk-card-container" elevation={3} sx={{ padding: 3, borderRadius: 2, backgroundColor: 'white', gap: "180px ",marginTop:"52px" }}>
      <Grid className="risk-card-grid" container spacing={2} sx={{ position: 'relative' }}>
        <Grid item xs={3} sx={{ position: 'relative', display: 'flex', flexWrap: 'wrap',paddingLeft:"58px" }} className='humain-container'>
          {/* Render empty humans */}
          {Array.from({ length: emptyHumans }).map((_, index) => (
            <Box
              key={`empty-${index}`}
              component="img"
              src="/humain empty.svg" // Your empty human icon
              alt="Empty Human"
              sx={{ width: 15, height: 25, margin: '2px' }}
            />
          ))}

          {/* Render filled humans */}
          {Array.from({ length: greenHumain }).map((_, index) => (
            <Box
              key={`filled-${index}`}
              component="img"
              src="/green humain.svg" // Your filled human icon
              alt="Filled Human"
              sx={{ width: 15, height: 25, margin: '2px' }}
            />
          ))}
          {Array.from({ length: filledHumans }).map((_, index) => (
            <Box
              key={`filled-${index}`}
              component="img"
              src="/humain.svg" // Your filled human icon
              alt="Filled Human"
              sx={{ width: 15, height: 25, margin: '2px' }}
            />
          ))}

          {/* Render "YOUR CURRENT RISK" label */}
          <Box
            sx={{
              position: 'absolute',
              top: `${currentRiskPosition}px`, // Position based on the number of empty humans
              left: '100%',
              transform: 'translateY(-50%)',
              backgroundImage: 'url(/union.png)',
              color: 'white',
              borderRadius: '4px',
              display: 'inline-block',
              textAlign:"center",
              marginTop:"20px",
              fontSize: '12px',
              fontWeight: 'bold',
            }}
            className="pointer-container humain"
          >
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: "white !important", fontSize: "16px" }}>
            Your lifetime risk 
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={9} sx={{ position: 'relative', maxWidth: "401px !important",width:"401px" }} className="risk-card-description-container">
          <Box className="risk-card-description" sx={{ marginTop: '10px', maxWidth: "401px" }}>
            <Typography className="risk-card-title humain" variant="h6" sx={{ color: '#006494', marginBottom: 1 }}>
              Lifetime risk of Crohn’s disease
            </Typography>
            <Typography className="risk-card-title" variant="p" sx={{ color: 'black', marginBottom: 1,fontWeight:"700",fontSize:"19px !important" }}>
            {HumainSentnace}
            </Typography>
           
            <Typography className="risk-card-text" variant="body1" sx={{ color: '#333' }}>
              {firstSentence} <strong>{diagnostics}</strong> {lastDiagnostics}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

 
