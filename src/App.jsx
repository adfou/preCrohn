import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { Toaster } from 'react-hot-toast';

import './assets/scss/styles.scss';
import router from 'routes';
import theme from './lib/theme'; // Adjust the path according to your file structure

import { rehydrate as rehydrateAuth } from './store/slice/authSlice';
import { rehydrate as rehydrateQuestionnaire } from './store/slice/questionnaireSlice'; // Import rehydrate action from questionnaireSlice

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(rehydrateAuth()); // Rehydrate the auth state on app load
    dispatch(rehydrateQuestionnaire()); // Rehydrate the questionnaire state on app load
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
