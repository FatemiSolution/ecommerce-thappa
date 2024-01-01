import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
const initialState = {
    product:{},
    loading: false,
    error: null,
}
export const getProductDetails = createAsyncThunk('ProductDetails',async(id=null)=>{
    const res =await axios.get(`https://api.pujakaitem.com/api/products?id=${id}`);
    const details = await res.data;
    return details;
}) 

const singleProductSlice = createSlice({
    name:'details',
    initialState,
    reducers: [],
    extraReducers:(builder)=>{
        builder.addCase(getProductDetails.pending,(state,action)=>{
            state.loading = true;
        })
        builder.addCase(getProductDetails.fulfilled,(state,action)=>{
            state.loading = false;
            state.product = action.payload;
        });
        builder.addCase(getProductDetails.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})
export default singleProductSlice.reducer;