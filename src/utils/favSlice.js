import { createSlice } from "@reduxjs/toolkit"

const favSlice = createSlice ({
    name: 'favItems',
    initialState: {
        items:[]
    },

    reducers: {
        addFavItem: (state, action) => {
            state.items.push(action.payload)
            console.log(state.items.length)
        },
        removeFavItem: (state, action) => {
            state.items = state.items.filter(item => item.data.id != action.payload)
        }
    }
    
})
export const { addFavItem, removeFavItem } = favSlice.actions
export default favSlice.reducer