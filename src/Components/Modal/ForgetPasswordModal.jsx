import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ForgetPasswordModal = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm" // Adjust size if needed
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '8px',
          backgroundColor: 'white',
          padding: 0,
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: 'white',
          paddingBottom: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#117BA3' }}>
         
          </span>
        </Box>
        <IconButton sx={{ color: '#117BA3' }} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          marginTop: '16px',
          background: 'white',
          color: '#117BA3',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '1.7em',
          textAlign: 'center',
        }}
      >
        To reset your password, please email{' '}
        <a
          href="mailto:mghprecrohns@mgb.org?subject=Inquiry%20About%20the%20Study"
          style={{ color: '#117BA3', textDecoration: 'underline' }}
        >
          mghprecrohns@mgb.org
        </a>{' '}
        directly.
      </DialogContent>
    </Dialog>
  );
};

export default ForgetPasswordModal;
