import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { showCart: true }

const uiSlice = createSlice({
    name: 'uiCart',
    initialState: initialCartState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        }
    }
})

export const uiActions = uiSlice.actions;


export default uiSlice;
