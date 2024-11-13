import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const NextStepsCard = ({ date, phase, role }) => {
  const [formattedDate, setFormattedDate] = useState("");
  
  useEffect(() => {
    if(date === null){
      setFormattedDate("Invalid Date")
      return
    }
    if (date && date !== null) {
      let parsedDate = new Date(date);
      console.log("role",role)
      console.log("phase",phase)
      if (role === "2") {
        if (phase === 0 || phase === 1) {
          console.log("in first phase :",phase)
          parsedDate.setDate(parsedDate.getDate() + 8 * 7); // Add 8 weeks
        } else {
          parsedDate.setMonth(parsedDate.getMonth() + 6); // Add 6 months
        }
      }

      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formatted = parsedDate.toLocaleDateString('en-US', options);
      console.log("formatted:",formatted)
      console.log("formatted,",formatted)
      setFormattedDate(formatted);
    }
    if (role === "3") {
      console.log("date",date)
      let parsedDate = new Date(date);
      parsedDate.setMonth(parsedDate.getMonth() + 6); // Add 6 months
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formatted = parsedDate.toLocaleDateString('en-US', options);
      console.log("formatted,",formatted)
      setFormattedDate(formatted);
    }
  }, [date]);

  return (
    <Card
      sx={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
        width: '100%', // Make card take full width
        margin: '0 auto', // Center card horizontally (only relevant if there is some width constraint)
        maxWidth: '884px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#117BA3',
          color: '#ffffff',
          padding: '8px',
          fontSize: '22px',
          fontWeight: '700',
        }}
      >
        Next steps
      </Box>

      <CardContent
        sx={{
          padding: '22px 45px 40px 45px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          color: '#085C7C',
          fontSize: '19px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', // Center the text and date
            gap: '21px', // Set gap between the elements
            width: '100%', // Ensures Box takes full width for proper centering
          }}
        >
          <Typography fontSize={19} sx={{ fontWeight: '700' }}>
            Your next questionnaire opens:
          </Typography>
          <Typography
            sx={{
              backgroundColor: '#FCE7A0',
              padding: '8px 60px',
              borderRadius: '13px',
              border: '1px solid #71B7D1',
              fontWeight: 600,
              fontSize: '18px',
              minWidth: '271px', // Set min width for date
              minHeight:'27px',
              textAlign:"center",
              height:"40px"
            }}
          >
            {formattedDate==="Invalid Date" || formattedDate===""?"_":formattedDate}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
