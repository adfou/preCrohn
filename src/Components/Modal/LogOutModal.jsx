import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const LogoutModal = ({ open, onConfirm, onCancel }) => {
  return (
    <Modal
      open={open}
      onClose={onCancel}
      aria-labelledby="logout-modal-title"
      aria-describedby="logout-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="logout-modal-title" variant="h6" component="h2">
          Confirm Logout
        </Typography>
        <Typography id="logout-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to log out?
        </Typography>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="primary" onClick={onConfirm}>
            Yes
          </Button>
          <Button variant="outlined" onClick={onCancel}>
            No
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default LogoutModal;
