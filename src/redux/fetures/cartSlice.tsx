import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

type CartItem = {
    id: number,
    quantity: number
}

type cartState = {
    value: number,
    cartItems: CartItem[],
    cartOpen: boolean,
}
const initialState: cartState = {
    value: 0,
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems") as string) : [],
    cartOpen: false
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseCartQuantity: (state, action: PayloadAction<number>) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload)
            // if item exist
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            } else {
                state.cartItems.push({ id: action.payload, quantity: 1 })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        decreaseCartQuantity: (state, action: PayloadAction<number>) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload)
            // if item exist
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity -= 1;
                if (state.cartItems[itemIndex].quantity === 0) {
                    state.cartItems.splice(itemIndex, 1)
                }
            } else {
                state.cartItems.push({ id: action.payload, quantity: 1 })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload)
            // if item exist
            if (itemIndex >= 0) {
                state.cartItems.splice(itemIndex, 1)
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        clearCart: (state) => {
            state.cartItems = []
        },
        openCart: (state) => {
            state.cartOpen = true
        },
        closeCart: (state) => {
            state.cartOpen = false
        }
    }
})

export const { increaseCartQuantity, decreaseCartQuantity, removeFromCart, clearCart, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer