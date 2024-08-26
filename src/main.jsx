import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import './styles.scss';

// Dynamically load the Adobe Fonts link
const link = document.createElement('link');
link.href = "https://use.typekit.net/fro7qfy.css";
link.rel = "stylesheet";
document.head.appendChild(link);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);