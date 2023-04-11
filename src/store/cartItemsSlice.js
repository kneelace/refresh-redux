import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const initialCartItemsState = {
    items: [],
    totalQuantity: 0,
    changed: false
}
const cartItemsSlice = createSlice({
    name: 'cartItems',
    initialState: initialCartItemsState,
    reducers: {
        addItemstoCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
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
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        },

        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        }
    }
})

export const fetchCartItems = (cart) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("https://react-learning1-50617-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json")

            if (!response.ok) {
                throw new Error("Could not fetch cart data")

            }

            const data = await response.json();

            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(cartItemsActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))
        }
        catch (error) {
            dispatch(uiActions.showNotification({
                title: 'Error...',
                status: 'error',
                message: 'Fetching Cart Data Failed'
            }))
        }
    }
}

export const sendCartItems = (cart) => {

    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            title: 'Sending...',
            status: 'pending',
            message: 'Sending Cart Data'
        }))

        const sendRequest = async () => {

            const response = await fetch("https://react-learning1-50617-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json", {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                }),
            })

            if (!response.ok) {
                throw new Error("Some Error Occured")
            }
        }

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                title: 'Success...',
                status: 'success',
                message: 'Sent Cart Data Successfully'
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                title: 'Error...',
                status: 'error',
                message: 'Sending Cart Data Failed'
            }))
        }
    }

}

export const cartItemsActions = cartItemsSlice.actions;
export default cartItemsSlice;