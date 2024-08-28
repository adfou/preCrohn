import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import {
  Container,
  TextField,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Button,
  CircularProgress,
  Typography,
  Alert,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuth } from '../Hooks/index.mjs';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState('');
  const { login, loading, error, data } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = () => {
    setValidationError(''); // Clear previous validation errors

    if (!email || !password) {
      setValidationError('Please fill in all required fields.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    login(email, password);
  };

  useEffect(() => {
    if (data) {
      console.log('Login successful:', data);

      if (data.status === 200) { // Check for successful login
        navigate('/dashboard'); // Redirect to /dashboard
      } else {
        setValidationError('Login failed. Please check your credentials.');
      }
    }
  }, [data, navigate]);

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}
    >
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>

      {/* Display validation or API errors */}
      {validationError && (
        <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
          {validationError}
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
          {error.message || 'An error occurred during login. Please try again.'}
        </Alert>
      )}

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={loading}
        sx={{ mt: 3, mb: 2 }}
      >
        {loading ? (
          <>
            <CircularProgress size={24} sx={{ mr: 1 }} />
            Signing in...
          </>
        ) : (
          'Sign in'
        )}
      </Button>
      <Button
        fullWidth
        variant="text"
        sx={{ mt: 1 }}
        onClick={() => console.log('Forgot password clicked')}
      >
        Forgot password?
      </Button>
    </Container>
  );
};

export default Login;