import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const CardParticipants = ({ title, type, variant = 'default' }) => {
  // Determine link and link text based on type
  let linkText = '';
  let linkUrl = '';
  let description = '';
  let linkImg = '';
  let imgWidth = '101px'; // Default width
  let imgHeight = '73px'; // Default height

  switch (type) {
    case 'Learn more':
      linkText = 'Learn more ';
      description = variant === 'white' 
        ? "After your 6-month visit & questionnaire are completed, you will have access to personalized risk information."
        : "about Crohn's disease";
      linkUrl = '/learn-more';
      linkImg = variant === 'white' ? '/information-white.png' : '/information.png';
      imgWidth = '80px';
      imgHeight = '80px';
      break;
    case 'Contact us':
      linkText = 'Contact us ';
      description = variant === 'white' 
        ? "After your 6-month visit & questionnaire are completed, you will have access to personalized risk information."
        : "and we'll be happy to help!";
      linkUrl = '/contact';
      linkImg = variant === 'white' ? '/question-white.png' : '/question.png';
      imgWidth = '80px';
      imgHeight = '80px';
      break;
    case 'Return to':
      linkText = 'Return to ';
      description = variant === 'white' 
        ? "After your 6-month visit & questionnaire are completed, you will have access to personalized risk information."
        : 'your personalized risk page';
      linkUrl = '/personalized-risk';
      linkImg = variant === 'white' ? '/personalized-white.png' : '/personalized.png';
      break;
    default:
      linkText = '';
      linkUrl = '#';
      linkImg = '';
  }

  return (
    <Card
      sx={{
        textAlign: 'center',
        padding: '0px',
        maxWidth: '246px',
        minHeight: '301px',
        boxShadow: '0px 3px 12px rgba(112, 112, 112, 0.3)', // Shadow with x=0, y=3, blur radius=12, spread=0, and opacity 6%
        border: '0px solid transparent', // Transparent border
        borderRadius: '12px',
        backgroundColor: variant === 'white' ? '#ffffff' : 'inherit',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          backgroundColor: variant === 'white' ? '#D3D3D3' : '#A0D5EA',
          color: variant === 'white' ? '#919191' : '#085C7C',
          padding: '5.5px 26px 5.9px 27px',
          borderRadius: '0px',
          mb: 2,
          fontSize: '22px',
          fontWeight: '700',
          marginBottom: '35px',
          lineHeight: '1.2em',
          minHeight: '70px',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {title}
      </Typography>

      <CardContent sx={{ padding: '0px' }}>
        <Box sx={{ marginTop: '20px', textAlign: 'center', paddingTop: '0px', padding: '0px 26px 0px 27px' }}>
          {/* Image */}
          <img src={linkImg} alt={title} style={{ width: imgWidth, height: imgHeight, marginBottom: '20px' }} />
          {/* Link and Description */}
          <Typography sx={{ fontSize: variant === 'white' ? '15px' : '18px', fontWeight: '700', color: variant === 'white' ? '#797979' : '#597D0B' }}>
            {linkText && (
              <a href={linkUrl} style={{ textDecoration: 'none', color: variant === 'white' ? '#797979' : '#597D0B' }}>
                {variant === 'white' ? "":linkText}
              </a>
            )}
            &nbsp;{/* Adds a space between link and description */}
            <Typography component="span" sx={{ fontSize: variant === 'white' ? '15px' : '19px', fontWeight: '400', color: '#797979' }}>
              {description}
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
