import React from 'react'
import { useSelector } from 'react-redux'
import { CartDetails } from '../components'
function Cart() {
  // const cartData = useSelector((state)=> state.cart);
  const data = useSelector((state)=>state.cart.cart)
  return (
    <div className='lg:mx-80 md:mx-52 mx-5'>
      <div className='grid grid-cols-5 text-xl py-5  font-semibold  '>
        <div className='flex justify-center'>item</div>
        <div className='pl-20 hidden md:block '>price</div>
        <div className='flex justify-center'>Quantity</div>
        <div className='hidden pl-16 md:block'>Subtotal</div>
        <div className='flex justify-center'>delete</div>
      </div>
      <hr className='text-xl font-bold' />
      <div>
        {data.map((curElem)=>{
          return <CartDetails key={curElem.id} product = {curElem}/>
        })}
      </div>
    </div>
  )
}

export default Cart