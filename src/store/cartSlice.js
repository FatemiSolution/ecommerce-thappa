import { createSlice } from "@reduxjs/toolkit";
import Product from "../components/Product";
const getlocalCartData = ()=>{
    let data = localStorage.getItem('cart');
    if(data === null) return[] 
    else return JSON.parse(data);
}
const initialState ={
    cart : getlocalCartData(),
    total_items :'',
    total_price :0,
    shipping_fees : 5000,
}
//todo create increment and decrement products functionality
const cartSlice = createSlice({
    name : 'carts',
    initialState,
    reducers :{
        // Add an item to the cart.
        addToCart : (state,action) =>{
            let {id,bgcolor,amount,product} = action.payload
            let details = {
                id : id + bgcolor,
                bgcolor,
                name : product.name,
                amount: amount,
                image : product.image[0].url,
                price : product.price,
                max : product.stock,
            }
            // making sure no extra items entry is created
            const item = state.cart.find((item) => item.id === details.id);
            if(item){ // adding item amount of the new shopping
               if(item.max >= item.amount + details.amount)  item.amount += details.amount;
              
            }else state.cart = [...state.cart, details];
            
            localStorage.setItem('cart', JSON.stringify(state.cart));
            console.log(state.cart)
        

        },
        // Removes item from the cart
        removeitem : (state, action) => {
            state.cart = [...state.cart].filter((item)=> item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        // increments amount in the cart 
        increments : (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item && item.amount < item.max) {
                item.amount += 1;
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
            state.total_price = [...state.cart].reduce((acc, item) =>{return acc + item.price},0);

        },
        // decrement amount in the cart 
        decrements: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item && item.amount > 1) {
                item.amount -= 1;
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
            state.total_price = [...state.cart].reduce((acc, item) =>{return acc + item.price},0);

        }, 
        clearCart: (state, action) => {
            state.cart = [];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        totalCal : (state) => {
            state.total_items = [...state.cart].reduce((acc, item) =>{return acc + item.amount},0);
            state.total_price = [...state.cart].reduce((acc, item) =>{return acc + item.price* item.amount},0);

        }
      
        
    }
    

})
export const {addToCart,removeitem,increments,decrements,clearCart,totalCal}= cartSlice.actions;
export default cartSlice.reducer;