import { configureStore, createSlice } from '@reduxjs/toolkit';

import authSlice from './authSlice';
import uiSlice from './uiSlice';
import cartItemsSlice from './cartItemsSlice';

const store = configureStore({
    reducer: {
        authentication: authSlice.reducer,
        uiCart: uiSlice.reducer,
        cartItems: cartItemsSlice.reducer
    }
})

export default store;