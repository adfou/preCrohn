import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const ConfirmationModal = ({ open, onClose, onConfirm, title, description, confirmText }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" mb={2}>{title}</Typography>
        <Typography variant="body1" mb={3}>{description}</Typography>
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="contained" color="primary"  onClick={onClose}>Cancel</Button>
          <Button variant="contained" color="error" onClick={onConfirm}>{confirmText}</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
