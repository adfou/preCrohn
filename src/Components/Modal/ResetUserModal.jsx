// Components/Modal/ResetUserModal.jsx
import React, { useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { useRestart } from '../../Hooks/index.mjs';

const ResetUserModal = ({ open, user, onClose, ToastSucc, ToastErr }) => {
  const { triggerRestart, restartData, loading, error } = useRestart();

  const onReset = async () => {
    await triggerRestart(user?.id); // Trigger the reset action
  };

  useEffect(() => {
    if (!loading) { // Only proceed if loading is false (meaning the reset request has completed)
      if (restartData && !error) {
        ToastSucc('User progress reset successfully');
        onClose();
      } else if (error) {
        ToastErr('Error resetting user progress');
        onClose();
      }
    }
  }, [loading, restartData, error, ToastSucc, ToastErr, onClose]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Reset User Progress"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to reset the progress of "{user?.firstName} {user?.secondName}"?
          This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onReset} color="error" disabled={loading} autoFocus>
          {loading ? "Resetting..." : "Reset"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResetUserModal;
