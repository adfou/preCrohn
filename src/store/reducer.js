// store/reducer.js
import { combineReducers } from '@reduxjs/toolkit';
import questionnaireReducer from './slice/questionnaireSlice';
import authReducer from "./slice/authSlice"
// import other reducers

const rootReducer = combineReducers({
    questionnaire: questionnaireReducer,
    auth: authReducer,
    // other reducers
});

export default rootReducer;