// Components/Modal/NextPhaseModal.jsx
import React, { useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { useNextStep } from '../../Hooks/index.mjs';

const NextPhaseModal = ({ open, user, onClose, ToastSucc, ToastErr }) => {
  const { triggerNextStep, nextStepData, loading, error } = useNextStep();

  const onNextPhase = async () => {
    await triggerNextStep(user?.id); // Trigger the next phase action
  };

  useEffect(() => {
    if (!loading) { // Only proceed if loading is false (meaning the next step request has completed)
      if (nextStepData && !error) {
        ToastSucc('User moved to the next phase successfully');
        onClose();
      } else if (error) {
        ToastErr('Error moving user to the next phase');
        onClose();
      }
    }
  }, [loading, nextStepData, error, ToastSucc, ToastErr, onClose]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Move User to Next Phase"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to move "{user?.firstName} {user?.secondName}" to the next phase?
          This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onNextPhase} color="success" disabled={loading} autoFocus>
          {loading ? "Processing..." : "Next Phase"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NextPhaseModal;
