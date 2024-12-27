// Dashboard.jsx
import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import { Registration } from '../Components/Common/Admin/Registration';
import {BulkUserUpload} from "../Components/Common/Admin/BulkUserUpload"
import { Helmet } from 'react-helmet';
const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      
      <Grid container spacing={2}>
        
        <Grid item xs={12} md={6}>
          <Box>
            <Registration />
          </Box>
       
        </Grid>
        

        
        
      </Grid>
    </Container>
  );
};

export default Dashboard;