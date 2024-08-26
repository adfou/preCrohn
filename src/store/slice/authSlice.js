// store/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: localStorage.getItem('token'), // Load token from localStorage
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token); // Save token to localStorage
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            localStorage.removeItem('token'); // Remove token from localStorage
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
