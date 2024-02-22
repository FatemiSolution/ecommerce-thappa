import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { CartDetails } from '../components'
import {Button} from '../components'
import { clearCart } from '../store/cartSlice'
function Cart() {
  // const cartData = useSelector((state)=> state.cart);
  const data = useSelector((state)=>state.cart.cart)
  const dispatch = useDispatch();
  // const clearStorage = ()=>{
  //   localStorage.clear();
  //   if(localStorage.length==0){

  //   }
  // }
 return  data.length !==0? (
    <>
    
    <div className='lg:mx-80 h-[70vh] md:mx-52 mx-5'>
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
    <div className='flex justify-around w-full '>
        <Button navigates='/products' children='back to shopping'/>
 
        <Button onClick={()=> dispatch(clearCart())} bgColor=' bg-red-600' className='px-5' children='clear cart' navigates={localStorage.length==0 ? '/error':null}/>
          
        

    </div>
    </>
  ):(
  <div className='h-[70vh] '>
    <h1 className='font-bold h-full text-3xl flex justify-center items-center'>No item in the cart</h1>
    </div>
  )
}

export default Cart