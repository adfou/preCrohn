// Components/Modal/DeleteUserModal.jsx
import React, { useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { useDeleteUser } from '../../Hooks/index.mjs';

const DeleteUserModal = ({ open, user, onClose, ToastSucc, ToastErr }) => {
  const { triggerDeleteUser, deleteData, loading, error } = useDeleteUser();

  const onDelete = async () => {
   
    await triggerDeleteUser(user?.id); // Trigger the delete action
  };
  
  useEffect(() => {
    if (!loading) { // Only proceed if loading is false (meaning the delete request has completed)
     
      if (deleteData !==null && error=== null) { // Check if deleteData is set and there's no error
        
        ToastSucc('User deleted successfully');
        onClose();
      } else {
        if( error !== null){
        ToastErr('Error deleting user');}
        //onClose(); // Close the modal after handling the delete operation
      }
      
      
    }
  }, [loading]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Delete User"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete the user "{user?.firstName} {user?.secondName}"?
          This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onDelete} color="error" disabled={loading} autoFocus>
          {loading ? "Deleting..." : "Delete"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteUserModal;
