import { createSlice, current } from "@reduxjs/toolkit";

const CartSlice = createSlice({

    name: "cart",

    initialState: {
        items: [],
    },

    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.card.info.id !== action.payload.card.info.id);
        },
        clearCart: (state, action) => {
            // return {
            //     items: []  
            // }
            console.log(current(state));
            state.items.length = 0; // []
        },
    },

});

export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;