import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const API = 'https://api.pujakaitem.com/api/products?id=';
const initialState = {
products : [],
featureProducts : [],
loading : false,
error :null,
};
// this is the code to fetch the product data from the api
export const getAllProducts = createAsyncThunk('getproducts', async()=>{
    const res =await axios.get(`https://api.pujakaitem.com/api/products?id=`);
    const products = await res.data;
    return products;
})


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    // this is used to update the state as per the result of API
    extraReducers: (builder) => {
      builder.addCase(getAllProducts.pending,(state,action) =>{
        state.loading = true;
        });
        builder.addCase(getAllProducts.fulfilled,(state,action) =>{
            state.loading = false;
            state.products = action.payload;
            state.featureProducts = action.payload.filter((product)=>product.featured === true);
            
        });
       builder.addCase(getAllProducts.rejected,(state,action) =>{
            state.loading = false;
            state.error = true;
        });
    }
})

export default productSlice.reducer;