import React from 'react';
import { Box, Typography, Grid, Paper, IconButton } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const CardBehavior = ({ title, subtitle, behaviors }) => {
  return (
    <Paper className="behavor-card"elevation={3} sx={{ paddingTop: "26px",paddingLeft:"33px",paddingRight:"53px",paddingBottom:"43px" ,borderRadius: 2, backgroundColor: 'white', marginTop: '20px' }}>
      <Typography className="risk-card-title" variant="h6" sx={{ color: '#006494', marginBottom: 1 ,fontWeight:"700" }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: '#00796B', marginBottom: 2 }}>
        {subtitle}
      </Typography>
      <Grid container direction="column" spacing={1} className='behavor'>
        {behaviors.map((behavior, index) => (
          <Grid item key={index} container alignItems="center" justifyContent="space-between" sx={{ borderTop: '1px solid #597D0B', paddingBottom: 1 }}>
            <Grid item container alignItems="center" xs={10}>
              <Box 
                component="img" 
                src="/like.png" 
                alt="Checked Icon" 
                sx={{ width: 30, height: 30, marginRight: 1 }} 
              />
              <Typography variant="body1" sx={{ color: '#00796B',marginBottom:"0px !important",marginLeft:"10px" }}>
                {behavior}
              </Typography>
            </Grid>
            <Grid item xs={2} container justifyContent="flex-end">
              <IconButton>
                <HelpOutlineIcon sx={{ color: '#597D0B',width: 30, height: 30 }} />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};