import { createSlice } from "@reduxjs/toolkit";
import Product from "../components/Product";

const initialState ={
    cart : [],
    total_items :'',
    total_amount :'',
    shipping_fees : 5000,
}

const cartSlice = createSlice({
    name : 'carts',
    initialState,
    reducers :{
        addToCart : (state,action) =>{
        //    let {id,bgcolor,amount,product} = action.payload
            console.log(action);
        }
    }

})
export const {addToCart}= cartSlice.actions;
export default cartSlice.reducer;