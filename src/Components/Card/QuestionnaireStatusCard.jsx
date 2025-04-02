import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { setCurrentSectionIndex } from '../../store/slice/questionnaireSlice'; 
import { useDispatch } from 'react-redux';

export const QuestionnaireStatusCard = ({ Percentage,FromDisabled }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Handle button click
  const handleButtonClick = () => {
    dispatch(setCurrentSectionIndex(0));
   
    navigate("/general-information");
    ///general-information
  };

  return (
    <Card
      sx={{
        backgroundColor: '#ffffff',
        maxWidth: '428px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        textAlign: 'center',
        padding: '0px',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          backgroundColor: '#117BA3',
          color: '#ffffff',
          padding: '8px',
          borderRadius: '0px',
          fontSize: '22px',
          fontWeight: '700',
        }}
      >
        Questionnaire status
      </Typography>

      <CardContent
        sx={{
          padding: '58px 70px 32px 70px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#80AD03',
            lineHeight:"23px",
            color: '#ffffff',
            fontSize: '20px',
            fontWeight: 600,
            borderRadius: '24px',
            padding: '5px 73px 8px 73px',
            marginTop: '0px',
            height:"65px",
            marginBottom: '70px',
            textTransform:"none",
            '&:disabled': {
              backgroundColor: '#c2c2c2', // Optional: Change color when button is disabled
            },
            '&:hover': {
              backgroundColor: '#709a02', // Optional: Change color on hover
            },
          }}
          disabled={FromDisabled}
          onClick={handleButtonClick}
        >
          Take the questionnaire
        </Button>

        <Box
          sx={{
            width: '271px',
            backgroundColor: '#FCE7A0',
            borderRadius: '13px',
            height: '16px',
            marginTop: '10px',
            border: '1px solid #71B7D1',
          }}
        >
          <Box
            sx={{
              width: `${Percentage}%`,
              backgroundColor: '#085C7C',
              height: '100%',
              borderRadius: '13px',
            }}
          ></Box>
        </Box>

        <Typography mt={2} sx={{ color: '#085C7C' }}>
          You've completed{' '}
          <Typography component="span" sx={{ fontWeight: 'bold' }}>
            {Percentage}%
          </Typography>{' '}
          so far
        </Typography>
      </CardContent>
    </Card>
  );
};
