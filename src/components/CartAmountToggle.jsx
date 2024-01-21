import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
function CartAmountToggle({
    increment,
    decrement,
    amount,
    className,
}) {
  return (
    <div className={`flex gap-5 items-center h-fit ${className}`}>
        <FaMinus className='cursor-pointer text-black' onClick={()=>{decrement()}} />
        <span className='text-xl text-blue-500'>{amount}</span>
        <FaPlus  className='cursor-pointer text-black'  onClick={()=>{increment()}}/>
    </div>
  )
}

export default CartAmountToggle