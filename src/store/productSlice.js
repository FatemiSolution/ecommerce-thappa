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
category: 'All',
company: 'All',
color:'All',
maxPrice: 6000000,
Price: 6000000,
minPrice: 0,
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
            // state.filterProducts = action.payload;
            state.featureProducts = action.payload.filter((product)=>product.featured === true);
            state.filterProducts =  [...action.payload].sort((a,b)=> a.price - b.price);
            const priceArr = [...state.products].map((product)=> product.price)
            state.maxPrice =  Math.max.apply(null, priceArr);
            state.Price = Math.max.apply(null, priceArr);
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
            if(state.sort === 'a-z'){
                state.filterProducts = [...state.filterProducts].sort((a,b)=>a.name.localeCompare(b.name))
            }else if(state.sort === 'z-a'){
                state.filterProducts =[...state.filterProducts].sort((a,b)=>b.name.localeCompare(a.name))
            }else if(state.sort === 'lowest'){
                state.filterProducts =  [...state.filterProducts].sort((a,b)=> a.price - b.price)
            }else if(state.sort === 'highest'){
                 state.filterProducts = [...state.filterProducts].sort((a,b)=> b.price - a.price)
              
            }
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
        
       categorizor : (state, action) => {
        state.category = action.payload
        state.category !=='All' ? state.filterProducts = [...state.filterProducts].filter((curelem)=>(
            curelem.category === state.category
        )):null;
       },
       companier : (state, action) => {
        state.company = action.payload
        state.company !=='All' ? state.filterProducts = [...state.filterProducts].filter((curelem)=>(
            curelem.company === state.company
        )) : null;
       },
       // todo: implement color functionality
       colorizer : (state, action) => {
        state.color = action.payload;
        state.color !=='All' ? state.filterProducts = [...state.filterProducts].filter((curelem)=>(
            curelem.colors.includes(state.color)
        )) : null;
       },
       maxPrizer: (state,action) => {
        state.maxPrice = action.payload
        state.Price = action.payload
       },
       Prizer: (state, action) => {
        state.Price = action.payload;
        let temp = [...state.filterProducts].filter((curelem)=>(
            curelem.price <= state.Price
        ));
        state.filterProducts = temp;
       },

    },

})
export const {view,sorting,sorted,searching,categorizor,companier,colorizer,Prizer,maxPrizer} = productSlice.actions
export default productSlice.reducer;