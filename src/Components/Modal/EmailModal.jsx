import React from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';

const EmailModal = ({ user, open, onClose }) => {
  const handleSend = () => {
    // Logic to send the email
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '20vh', maxWidth: 400 }}>
        <Typography variant="h6" gutterBottom>
          Send Email to {user?.firstName}
        </Typography>
        <TextField
          fullWidth
          label="Subject"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Modal>
  );
};

export default EmailModal;
