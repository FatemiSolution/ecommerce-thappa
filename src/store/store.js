import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import singleProductSlice from "./singleProductSlice";
const store = configureStore({
    reducer:{
        product: productSlice,
        productDetails: singleProductSlice,
    }
})

export default store;