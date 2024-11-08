import React, { useState } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import UserTable from '../Components/Common/Admin/UserTable'; // Create this component to display users
import EmailModal from '../Components/Modal/EmailModal'; // Create this component for the email modal
// import ResetPasswordModal from '../Components/ResetPasswordModal'; // Create this component for the password reset modal
import { useNextStep,useRestart } from '../Hooks/index.mjs';
import DeleteUserModal from '../Components/Modal/DeleteUserModal'
import { toast } from 'react-hot-toast';

const PatientDashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isUserDelete, setisUserDelete] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
  const [RefreshTable ,setRefreshTable] = useState(true)
  const handleSendEmail = (user) => {
    setSelectedUser(user);
    setIsEmailModalOpen(true);
  };

  const handleResetPassword = (user) => {
    setSelectedUser(user);
    setIsResetPasswordModalOpen(true);
  };

  const handleDeleteUser = (user) => {
    
    setSelectedUser(user);
    setisUserDelete(true);
  };
  const ToastSucc = (text)=> {
    toast.success('User deleted successfully');
    setRefreshTable(!RefreshTable)
  }
  const ToastErr= (text)=> {
    toast.error('Failed to delete user.');
  }

  return (
    <Container maxWidth="90%">
      <Grid container spacing={2} direction="column">
        
        {/* Top side with User Table */}
        <Grid item xs={12}>
          <Box>
            
            <UserTable 
              onSendEmail={handleSendEmail} 
              onResetPassword={handleResetPassword} 
              onDeleteUser={handleDeleteUser}
              RefreshTable={RefreshTable}
            />
          </Box>
        </Grid>

      
        
      </Grid>

      {/* Modals */}
      <EmailModal 
        user={selectedUser} 
        open={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
      />
      {/*<ResetPasswordModal 
        user={selectedUser} 
        open={isResetPasswordModalOpen} 
        onClose={() => setIsResetPasswordModalOpen(false)} 
      />*/}
      <DeleteUserModal 
        open={isUserDelete} 
        user={selectedUser} 
        onClose={() => {setisUserDelete(false)}} 
        ToastSucc={ToastSucc}
        ToastErr={ToastErr}
      />
    </Container>
  );
};

export default PatientDashboard;
