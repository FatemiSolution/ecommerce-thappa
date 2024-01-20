import React from 'react'

function Cart() {
  return (
    <div className='lg:mx-80 md:mx-52 mx-5'>
      <div className='flex text-xl py-5 font-semibold justify-between '>
        <p>item</p>
        <p className='hidden md:block'>price</p>
        <p>Quantity</p>
        <p className='hidden md:block'>Subtotal</p>
        <p>delete</p>
      </div>
      <hr className='text-xl font-bold' />
    </div>
  )
}

export default Cart