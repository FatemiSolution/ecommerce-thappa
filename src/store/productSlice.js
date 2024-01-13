import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
products : [],
view: null,
grid: false,
featureProducts : [],
filterProducts : [],
loading : false,
error :null,
sort: 'lowest',

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
            let temp = [...action.payload].sort((a,b)=> a.price - b.price)
            state.filterProducts = temp;
        });
       builder.addCase(getAllProducts.rejected,(state,action) =>{
            state.loading = false;
            state.error = true;
        });
    },
    reducers:{
        view : (state,action) =>{
            state.grid = action.payload;
        },
        sorting : (state,action) =>{
            state.sort = action.payload;
        },
        sorted : (state,action) =>{
            if(state.sort === 'a-z'){
                state.filterProducts = [...action.payload].sort((a,b)=>a.name.localeCompare(b.name))
            }else if(state.sort === 'z-a'){
                state.filterProducts =[...action.payload].sort((a,b)=>b.name.localeCompare(a.name))
            }else if(state.sort === 'lowest'){
                state.filterProducts =  [...action.payload].sort((a,b)=> a.price - b.price)
            }else if(state.sort === 'highest'){
                 state.filterProducts = [...action.payload].sort((a,b)=> b.price - a.price)
              
            }
        }
       
    },
})
export const {view,sorting,sorted} = productSlice.actions
export default productSlice.reducer;