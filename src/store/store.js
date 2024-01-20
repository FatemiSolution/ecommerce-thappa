import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import singleProductSlice from "./singleProductSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
    reducer:{
        product: productSlice,
        productDetails: singleProductSlice,
        cart: cartSlice
    }
})

export default store;