import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },

    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        clearItem: (state) => {
            state.items = []
            console.log(state.items)
        },
        removeItem: (state, action) => {
           state.items =  state.items.filter(item => item.id != action.payload)
        },
    
    }
})


export const { addItem, clearItem,removeItem } = cartSlice.actions;
export default cartSlice.reducer;