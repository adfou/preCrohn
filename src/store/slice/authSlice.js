import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: localStorage.getItem('token') || null,
    loading: true, // Initial loading state
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            console.log("****")
            console.log(action.payload)
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.loading = false; // Authentication is complete
            localStorage.setItem('token', action.payload.token);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.loading = false; // Authentication is complete
            localStorage.removeItem('token');
        },
        rehydrate: (state) => {
            const token = localStorage.getItem('token');
            if (token) {
                state.isAuthenticated = true;
                state.token = token;
                // Optionally decode the token to get user info if necessary
            }
            state.loading = false; // Rehydration is complete
        },
    },
});

export const { loginSuccess, logout, rehydrate } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
