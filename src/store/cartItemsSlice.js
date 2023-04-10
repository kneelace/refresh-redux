import { createSlice } from "@reduxjs/toolkit";

const initialCartItemsState = {
    items: [],
    totalQuantity: 0
}
const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState: initialCartItemsState,
    reducers: {
        addItemstoCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                })
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price

            }
        },

        removeItemsFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price

            }
        }
    }
})

export const cartItemsActions = cartItemsSlice.actions;
export default cartItemsSlice;