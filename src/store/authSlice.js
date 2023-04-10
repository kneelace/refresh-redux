import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: true }

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        toggleAuth(state) {
            state.isAuthenticated = !state.isAuthenticated;
        }
    }
})

export const authActions = authSlice.actions;


export default authSlice;