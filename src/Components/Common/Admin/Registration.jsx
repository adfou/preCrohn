import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, CircularProgress, FormControl, FormControlLabel, RadioGroup, Radio, Typography, Alert, Box } from '@mui/material';
import { useRegister } from '../../../Hooks/useRegister'; // Adjust the path as needed
import { toast } from 'react-hot-toast';

export const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('3'); // Default role
  const [biomarkers, setBiomarkers] = useState('no'); // New state for biomarkers
  const { register, loading, error, data } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    register(firstName, secondName, username, email, password, role,biomarkers);
  };

  useEffect(() => {
    if (data) {
      toast.success('Registration successful');
    }
  }, [data]);

  return (
    <Container component="main" maxWidth="xs" sx={{ p: 3, my: 5, background: "white", borderRadius: "24px", padding: "34px", marginTop: "0px" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Add New User
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
          required
        />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Role
          </Typography>
          <RadioGroup
            value={role}
            onChange={(e) => setRole(e.target.value)}
            row
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Admin"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Intervention"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Control"
            />
          </RadioGroup>
        </FormControl>

        {/* New Biomarkers Field */}
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            ≥ 2+ biomarkers?
          </Typography>
          <RadioGroup
            value={biomarkers}
            onChange={(e) => setBiomarkers(e.target.value)}
            row
          >
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label="No"
            />
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          disabled={loading}
        >
          {loading ? (
            <>
              <CircularProgress size={24} sx={{ mr: 1 }} />
              Registering...
            </>
          ) : (
            'Register'
          )}
        </Button>
      </Box>

      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
    </Container>
  );
};
