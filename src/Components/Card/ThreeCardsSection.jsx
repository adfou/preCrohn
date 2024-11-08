import React from 'react';
import { Box } from '@mui/material';
import {CardParticipants} from './CardParticipants';

export const ThreeCardsSection = ({progression,phase,role}) => {

  console.log("==========================")
  console.log("progression",progression)
  console.log('phase',phase)
  console.log("role",role)
  console.log("condition,:",progression ===100 && phase === 1 )
  console.log("==========================")

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
      {role==="2"?
    
      <CardParticipants title="Your personalized risk" type="Return to" variant={ phase !== 0 ?'default':'white'} />:
      <CardParticipants title="Your personalized risk" type="Return to" variant={progression ===100 && phase === 1 ?'default':'white'} />
      }
      
    </Box>
  );
};

