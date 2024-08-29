import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import './assets/scss/styles.scss';
import router from 'routes';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { rehydrate } from './store/slice/authSlice'

// Import your custom theme
import theme from './lib/theme'; // Adjust the path according to your file structure

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rehydrate()); // Rehydrate the auth state on app load
  }, [dispatch]);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;