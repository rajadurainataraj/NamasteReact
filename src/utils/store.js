import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import favSlice from "./favSlice";

const store = configureStore({
    
    reducer: {
        cart: cartSlice,
        favItems: favSlice
     }
})

export default store;