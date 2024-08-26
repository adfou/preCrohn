// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Adjust this path as needed

const store = configureStore({
  reducer: rootReducer,
});

export default store;
