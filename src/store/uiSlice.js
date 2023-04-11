import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { showCart: true, notification: null }

const uiSlice = createSlice({
    name: 'uiCart',
    initialState: initialCartState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }

    }
})

export const uiActions = uiSlice.actions;


export default uiSlice;
