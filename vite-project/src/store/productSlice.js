import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const API = 'https://api.pujakaitem.com/api/products';
const initialState = {
products : [],
loading : false,
error :null,
};

export const getAllProducts = createAsyncThunk('getUsers', async()=>{
    const res =await axios.get('https://api.pujakaitem.com/api/products');
    // console.log('file : productSlice.js - line 23 - getProducts - res', res)
    const products = await res.data;
    return products;
})
// useEffect(() => {
//  getProduct(API);

// }, [])

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
      builder.addCase(getAllProducts.pending,(state,action) =>{
        state.loading = true;
        });
        builder.addCase(getAllProducts.fulfilled,(state,action) =>{
            state.loading = false;
            state.products = action.payload;
        });
       builder.addCase(getAllProducts.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default productSlice.reducer;