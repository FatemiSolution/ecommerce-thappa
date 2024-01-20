import React, { useState } from 'react'
import { TiTick } from "react-icons/ti";
import {Button, CartAmountToggle} from './index';
// import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
function AddToCart({
    product = {},
}) {
    const dispatch = useDispatch();
    const {id, colors, stock } = product;
    const [bgcolor, setbgcolor] = useState(colors[0])
    const [amount, setamount] = useState(1);
    const increment = () =>{
        amount < stock ? setamount(amount + 1) : setamount(stock);
    }
    const decrement = () =>{
        amount > 1 ? setamount(amount - 1) : setamount(amount);
    }
  return (
    <div>
        <p className='gap-2 flex items-center'>
            Colors:
            {colors.map((color, index) =>(
                // {'&ensp;'}
                <button key={index} className={`rounded-full opacity-60 hover:opacity-100 w-5 h-5 ${color == bgcolor?'opacity-[100%]':'' }`} style={{backgroundColor:color}} onClick={()=>setbgcolor(color)}>
                    {color === bgcolor ?<TiTick className='text-white pl-1' />: null }
                </button>
            ))}
        </p>
        <CartAmountToggle decrement={decrement} increment = {increment} amount = {amount} className ={'py-2 pl-2'} />
        <Button navigates={'/cart'} children='Add to Cart' onClick={()=>dispatch(addToCart({id,bgcolor,amount,product})) } />
    </div>
  )
}

export default AddToCart
