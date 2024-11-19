import React from 'react';
import { Box } from '@mui/material';
import {CardParticipants} from './CardParticipants';

export const ThreeCardsSection = ({progression,phase,role}) => {


  return (
    <Box
      sx={{
        padding: '80px 240px 70px 250px',
        display: 'flex',
        justifyContent: 'center',
        gap: '72.5px',
      }}
      className='three-card-mobile'
    > 
      {role==="2"?
  
  <CardParticipants title="Your personalized risk" type="Return to" variant={ phase !== 0 ||(phase === 0 && progression ===100 ) ?'default':'white'} />:
  "" 
  }
      <CardParticipants title="Access information" type="Learn more" />
      <CardParticipants title="Questions?" type="Contact us" />
      {role==="2"?
  
      "":
      <CardParticipants title="Your personalized risk" type="Return to"  role={role} variant={progression ===100 && phase === 2 ?'default':'white'}/>
      }
      
    </Box>
  );
};

