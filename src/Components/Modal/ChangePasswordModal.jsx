import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useChangePassword } from '../../Hooks/useChangePassword'; // Import your change password hook

const ChangePasswordModal = ({ open, user, onClose, ToastSucc, ToastErr }) => {
  const { changePassword, loading, error, data } = useChangePassword();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = async () => {
    if (!newPassword.trim() || !confirmPassword.trim()) {
      ToastErr('Password fields cannot be empty');
      return;
    }

    if (newPassword !== confirmPassword) {
      ToastErr('Passwords do not match');
      return;
    }

    await changePassword(user?.id, newPassword);
  };

  useEffect(() => {
    if (!loading) { // Monitor changes in loading state to handle success or error
      if (data && !error) {
        ToastSucc('Password changed successfully');
        onClose();
      } else if (error) {
        ToastErr('Error changing password');
      }
    }
  }, [loading, data, error, ToastSucc, ToastErr, onClose]);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="change-password-dialog-title"
      aria-describedby="change-password-dialog-description"
    >
      <DialogTitle id="change-password-dialog-title">{"Change User Password"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="change-password-dialog-description">
          Enter a new password for "{user?.firstName} {user?.secondName}".
        </DialogContentText>

        {/* New Password Field */}
        <TextField
          autoFocus
          margin="dense"
          id="new-password"
          label="New Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          variant="outlined"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Confirm Password Field */}
        <TextField
          margin="dense"
          id="confirm-password"
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handlePasswordChange} color="success" disabled={loading}>
          {loading ? "Changing..." : "Change Password"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangePasswordModal;
