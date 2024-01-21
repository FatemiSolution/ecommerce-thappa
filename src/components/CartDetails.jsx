import React from 'react'
import FormatCurrency from './formatCurrency'
import CartAmountToggle from './CartAmountToggle'
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { removeitem } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
function CartDetails({
   product,
    
}) {
    const dispatch = useDispatch();
    // const [amount, setamount] = useState(product.amount);
    const increment = () =>{
        // amount < product.max ? setamount(amount + 1) : setamount(product.max);
    }
    const decrement = () =>{
        // amount > 1 ? setamount(amount - 1) : setamount(amount);
    }
  return (
    <div>
         <div className='grid py-5 grid-cols-5 '>
        <div className='flex items-center justify-center gap-2'>
            <img src={product.image} className='w-12 h-8' />
            <div className='flex text-sm flex-col w-fit h-fit '>
                <p>{product.name}</p>
                <p className='flex items-center'>Color:&nbsp;<button className={`rounded-full opacity-60 hover:opacity-100 w-5 h-5`} style={{backgroundColor: product.bgcolor}} ></button> </p>
            </div>
        </div>
        <div className='pl-[50px] hidden md:block'><FormatCurrency number={product.price}/></div>
        <div className='flex justify-center'><CartAmountToggle decrement={decrement} increment = {increment} amount = {product.amount}/></div>
        <div className='pl-16 hidden md:block'><FormatCurrency number={product.price * product.amount} /></div>
        <div className='flex justify-center' ><MdDelete className='text-red-600 text-2xl cursor-pointer' onClick={()=>dispatch(removeitem(product.id)) } /></div>
        </div>
      <hr className='text-xl font-bold' />
     
    </div>
  )
}

export default CartDetails
