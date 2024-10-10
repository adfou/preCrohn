// Dashboard.jsx
import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import { Registration } from '../Components/Common/Admin/Registration';

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        
        {/* Left side with Registration */}
        <Grid item xs={12} md={6}>
          <Box>
            <Registration />
          </Box>
        </Grid>

        {/* Right side with two TotalIncomeCard components */}
        
        
      </Grid>
    </Container>
  );
};

export default Dashboard;