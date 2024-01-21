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
            let {id,bgcolor,amount,product} = action.payload
            let details = {
                id : id + bgcolor,
                bgcolor,
                name : product.name,
                amount,
                image : product.image[0].url,
                price : product.price,
                max : product.stock,
            }
            state.cart = [...state.cart, details]
            console.log(state.cart)
        

        },
        removeitem : (state, action) => {
            state.cart = [...state.cart].filter((item)=> item.id !== action.payload)
            console.log(action.payload)
        }
    }

})
export const {addToCart,removeitem}= cartSlice.actions;
export default cartSlice.reducer;