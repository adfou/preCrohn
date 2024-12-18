import React, { useState } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import UserTable from '../Components/Common/Admin/UserTable'; // Create this component to display users
import EmailModal from '../Components/Modal/EmailModal'; // Create this component for the email modal
// import ResetPasswordModal from '../Components/ResetPasswordModal'; // Create this component for the password reset modal
import { useNextStep,useRestart } from '../Hooks/index.mjs';
import DeleteUserModal from '../Components/Modal/DeleteUserModal'
import NextPhaseModal from '../Components/Modal/NextPhaseModal'
import ResetUserModal from '../Components/Modal/ResetUserModal'
import ChangePasswordModal  from '../Components/Modal/ChangePasswordModal'
import { toast } from 'react-hot-toast';
import { useDownloadSheet } from '../Hooks/useDownloadSheet';

const PatientDashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isUserDelete, setisUserDelete] = useState(false);
  const [isUserNext, setisUserNext] = useState(false);
  const [isUserReset, setisUserReset] = useState(false);
  const [isChangePasswordModalOpen, setisChangePasswordModalOpen] = useState(false);
  const [RefreshTable ,setRefreshTable] = useState(true)
  const { downloadSheet, loading, error } = useDownloadSheet();



  const handleDownload = (IDuser) => {
    console.log("handleDownload")
    console.log("IDuser:",IDuser)
    downloadSheet(IDuser);
  };

  const handleSendEmail = (user) => {
    setSelectedUser(user);
    setIsEmailModalOpen(true);
  };

  const handleChangePassword = (user) => {
    setSelectedUser(user);
    setisChangePasswordModalOpen(true);
  };

  const handleDeleteUser = (user) => {
    console.log("delet")
    
    setSelectedUser(user);
    setisUserDelete(true);
  };

  const handleNextUser = (user) => {
    
    setSelectedUser(user);
    setisUserNext(true);
  };
  const handleResteUser = (user) => {
    
    setSelectedUser(user);
    setisUserReset(true);
  };
  const ToastSucc = (text)=> {
    toast.success(''+text+' successfully');
    setRefreshTable(!RefreshTable)
  }
  const ToastErr= (text)=> {
    toast.error('Failed to '+text);
  }

  return (
    <Container maxWidth="90%">
      <Grid container spacing={2} direction="column">
        
        {/* Top side with User Table */}
        <Grid item xs={12}>
          <Box>
            
            <UserTable 
              onSendEmail={handleSendEmail} 
              onResetPassword={handleChangePassword} 
              onDeleteUser={handleDeleteUser}
              onNextUser={handleNextUser}
              onRestUser={handleResteUser} 
              
              RefreshTable={RefreshTable}
              handleDownload={handleDownload}
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
          {isUserDelete && (
           
            <DeleteUserModal
              open={isUserDelete}
              user={selectedUser}
              onClose={() => setisUserDelete(false)}
              ToastSucc={() => ToastSucc("Delete")}
              ToastErr={() => ToastErr("Delete")}
            />
          )}
          {isUserNext && (
            <NextPhaseModal
              open={isUserNext}
              user={selectedUser}
              onClose={() => setisUserNext(false)}
              ToastSucc={() => ToastSucc("Next Phase")}
              ToastErr={() => ToastErr("Next Phase")}
            />
          )}
          {isUserReset && (
            <ResetUserModal
              open={isUserReset}
              user={selectedUser}
              onClose={() => setisUserReset(false)}
              ToastSucc={() => ToastSucc("Reset Phase")}
              ToastErr={() => ToastErr("Reset Phase")}
            />
          )}

           {isChangePasswordModalOpen && (
        <ChangePasswordModal
          open={isChangePasswordModalOpen}
          user={selectedUser}
          onClose={() => setisChangePasswordModalOpen(false)}
          ToastSucc={() => ToastSucc("Password Change")}
          ToastErr={() => ToastErr("Password Change")}
        />
      )}

    </Container>
  );
};

export default PatientDashboard;
