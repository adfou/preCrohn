import { dark } from '@mui/material/styles/createPalette';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
    currentSectionIndex: 0,
    sectionTags: ["general-information", "medical-history", "family-history"]
};

const questionnaireSlice = createSlice({
    name: 'questionnaire',
    initialState,
    reducers: {
        setGeneralInformation: (state, action) => {
            state.generalInformation = action.payload;
        },
        setMedicalHistory: (state, action) => {
            state.medicalHistory = action.payload;
        },
        setFamilyHistory: (state, action) => {
            state.familyHistory = action.payload;
        },
        setCurrentSectionIndex: (state, action) => {
            state.currentSectionIndex = action.payload;
        },
        saveFormData: (state, action) => {
       

            const { currentSectionIndex, data } = action.payload;
            const sectionTag = state.sectionTags[currentSectionIndex];
           
            
            // Merge the new data with existing data for the section
            state.data[sectionTag] = {
                ...(state.data[sectionTag] || {}),  // Ensure existing data is preserved
                ...data  // Add new data
            };
        },
    },
});

export const { setGeneralInformation, setMedicalHistory, setFamilyHistory, setCurrentSectionIndex, saveFormData } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
