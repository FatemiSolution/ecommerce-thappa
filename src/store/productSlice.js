import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
products : [],
grid: false,
featureProducts : [],
filterProducts : [],
loading : false,
error :null,
sort: 'lowest',
searchText : '',

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
        // grid and linear view functionality
        view : (state,action) =>{
            state.grid = action.payload;
        },
        // sorting functionality
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
        },
        //searching functionality from the products
        searching :(state,action) => {
            state.searchText = [action.payload]
           state.searchText !==''? state.filterProducts = [...state.products].filter((curelem)=>(
                curelem.name.toLowerCase().includes(state.searchText)
            )):null
        },
       
    },

})
export const {view,sorting,sorted,searching} = productSlice.actions
export default productSlice.reducer;