import React from 'react';
import { Box } from '@mui/material';
import {CardParticipants} from './CardParticipants';

export const ThreeCardsSection = (progression) => {
  console.log("progression:",progression.progression)
  return (
    <Box
      sx={{
        padding: '80px 240px 70px 250px',
        display: 'flex',
        justifyContent: 'center',
        gap: '72.5px',
      }}
    >
      
      <CardParticipants title="Access information" type="Learn more" />
      <CardParticipants title="Questions?" type="Contact us" />
      <CardParticipants title="Your personalized risk" type="Return to" variant={progression.progression===100?'nprmal':'white'}/>
    </Box>
  );
};

