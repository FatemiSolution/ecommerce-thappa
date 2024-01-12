import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
const lowest = 'lowest';
const API = 'https://api.pujakaitem.com/api/products?id=';
const initialState = {
products : [],
view: null,
grid: false,
featureProducts : [],
filterProducts : [],
loading : false,
error :null,
sort: null,

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
   
    // this is used to update the state as per the result of API
    extraReducers: (builder) => {
      builder.addCase(getAllProducts.pending,(state,action) =>{
        state.loading = true;
        });
        builder.addCase(getAllProducts.fulfilled,(state,action) =>{
            state.loading = false;
            state.products = action.payload;
            state.featureProducts = action.payload.filter((product)=>product.featured === true);
            state.filterProducts = state.products;
            
            
        });
       builder.addCase(getAllProducts.rejected,(state,action) =>{
            state.loading = false;
            state.error = true;
        });
    },
    reducers:{
        fitering : (state,action) => {        
                state.filterProducts = action.payload
        },
        view : (state,action) =>{
            // state.view = action.payload
            state.grid = action.payload;
        },
        sorting : (state,action) =>{
            state.sort = action.payload;
            
          
        },
        sorted : (state,action) =>{
            if(state.sort === 'a-z'){

                let temp = [...action.payload].sort((a,b)=>a.name.localeCompare(b.name))
                state.filterProducts = temp;
            }else if(state.sort === 'z-a'){
                let temp = [...action.payload].sort((a,b)=>b.name.localeCompare(a.name))
                state.filterProducts = temp;
            }else if(state.sort === 'lowest' || state.sort ===undefined){
                let temp = [...action.payload].sort((a,b)=> a.price - b.price)
                state.filterProducts = temp;
            }else if(state.sort === 'highest' || state.sort ===undefined){
                let temp = [...action.payload].sort((a,b)=> b.price - a.price)
                state.filterProducts = temp;
            }
        }
       
    },
})
export const {fitering,view,sorting,sorted} = productSlice.actions
export default productSlice.reducer;