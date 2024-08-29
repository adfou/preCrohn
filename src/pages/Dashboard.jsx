// Dashboard.jsx
import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import Sidebar from '../Components/Common/Sidebar'; // Adjust the path as needed
import { Registration } from '../Components/Common/Admin/Registration';
import TotalIncomeCard from "../ui-component/cards/Skeleton/TotalIncomeCard"
import TotalGrowthBarChart from "../ui-component/cards/Skeleton/TotalGrowthBarChart"

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
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TotalIncomeCard />
            </Grid>
            <Grid item xs={12}>
              <TotalGrowthBarChart />
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>
    </Container>
  );
};

export default Dashboard;