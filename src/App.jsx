/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home,About,Admin,Dashboard} from './pages/index.mjs';
import { Toaster } from 'react-hot-toast';


import {MainLayout,AuthLayout} from './Components/Layout/index.mjs';
//import AuthLayout from './Components/Layout/AuthLayout.jsx';

function App() {
    return (
        <Router>
            <Toaster />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>


                {<Route element={<MainLayout />}>
                    <Route path="/about" element={<About title={"About the study"} />} />
                </Route>}


                {<Route element={<AuthLayout />}>
                    <Route path="/login" element={<Admin />} />
                </Route>}

                {<Route >
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>}
            </Routes>
           
        </Router>
    );
}

export default App;
*/


import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
//import store from './store/store';
// routing
import './assets/scss/styles.scss';
import router from 'routes';
import { Toaster } from 'react-hot-toast';

// defaultTheme
//import themes from 'themes';

// project imports
//import NavigationScroll from 'layout/NavigationScroll';

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Toaster />
          <RouterProvider router={router} />
        
      
    </StyledEngineProvider>
  );
};

export default App;


