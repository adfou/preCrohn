import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
    currentSectionIndex: 0,
    sectionTags: ["general-information", "medical-history", "family-history"]
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
    rehydrate,
} = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
