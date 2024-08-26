// actions.js
export const updateRadio = (payload) => ({ type: 'UPDATE_RADIO', payload });
export const updateCheckbox = (payload) => ({ type: 'UPDATE_CHECKBOX', payload });
export const updateInput = (payload) => ({ type: 'UPDATE_INPUT', payload });

// reducer.js
const initialState = {
    formData: {}
};

const questionnaireReducer = (state = initialState, action) => {
    console.log("-------------------")
    console.log(action)
    console.log("-------------------")
    switch (action.type) {
        case 'UPDATE_RADIO':
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.payload.question]: action.payload.value
                }
            };
        case 'UPDATE_CHECKBOX':
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.payload.question]: {
                        ...state.formData[action.payload.question],
                        [action.payload.option]: action.payload.checked
                    }
                }
            };
        case 'UPDATE_INPUT':
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.payload.field]: action.payload.value
                }
            };
        default:
            return state;
    }
};

export default questionnaireReducer;
