import { createRoot } from 'react-dom/client';

// third party
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// project imports
import App from './App';
import reducer from './store/reducer';

// style + assets
import './assets/scss/styles.scss';
import './assets/scss/MainSlider.scss';
import './assets/scss/Common.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//import reportWebVitals from 'reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container); 
const store = configureStore({ reducer });

// ==============================|| REACT DOM RENDER  ||============================== //

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
