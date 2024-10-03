import { createSlice } from '@reduxjs/toolkit';
import {useCreateForm} from "../../Hooks/useCreateForm";
const initialState = {
    data: {},
    currentSectionIndex: 0,
    sectionTags: ["general-information", "medical-history", "family-history","your-diet","your-diet-2","your-diet-3","your-diet-4","your-diet-5","your-diet-6","your-diet-7","your-physical-activity","your-smoking-history"]
};

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('questionnaire', serializedState);
    } catch (e) {
        console.error('Could not save state', e);
    }
};

const questionnaireSlice = createSlice({
    name: 'questionnaire',
    initialState,
    reducers: {
        setGeneralInformation: (state, action) => {
            state.generalInformation = action.payload;
            saveToLocalStorage(state); // Save the state to local storage
        },
        setMedicalHistory: (state, action) => {
            state.medicalHistory = action.payload;
            saveToLocalStorage(state); // Save the state to local storage
        },
        setFamilyHistory: (state, action) => {
            state.familyHistory = action.payload;
            saveToLocalStorage(state); // Save the state to local storage
        },
        setCurrentSectionIndex: (state, action) => {
            state.currentSectionIndex = action.payload;
            saveToLocalStorage(state); // Save the state to local storage
        },
        saveFormData: (state, action) => {
            const { currentSectionIndex, data } = action.payload;
            const sectionTag = state.sectionTags[currentSectionIndex];
            state.data[sectionTag] = {
                ...(state.data[sectionTag] || {}),
                ...data,
            };
          
            saveToLocalStorage(state); // Save the state to local storage
        },
        SetFormDataLogin: (state, action) => {
            const { data } = action.payload;
            console.log("action data", data);
        
            // Check if data is a string, and if so, parse it
            if (typeof data === 'string') {
                try {
                    data = JSON.parse(data); // Parse stringified JSON
                } catch (error) {
                    console.error('Failed to parse data. Data is not valid JSON:', error);
                }
            }
        
            // Completely replace the current state data with the new data
            state.data = data;
        
            // Save the updated state to local storage
            saveToLocalStorage(state);
        },
        rehydrate: (state) => {
            const savedData = JSON.parse(localStorage.getItem('questionnaire'));
            if (savedData) {
                return { ...state, ...savedData }; // Merge saved state with initial state
            }
        },
    },
});

export const {
    setGeneralInformation,
    setMedicalHistory,
    setFamilyHistory,
    setCurrentSectionIndex,
    saveFormData,
    SetFormDataLogin,
    rehydrate,
} = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
