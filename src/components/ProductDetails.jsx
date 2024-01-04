import React from 'react'
import { FaTruck } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { IoShieldSharp } from "react-icons/io5";
import { RiRefund2Line } from "react-icons/ri";
import {FormatCurrency, RatingStar, AddToCart} from './index';

function ProductDetails({
    name = '',
    stars = '',
    reviews = '',
    price = '',
    description = '',
    stock = '',
    id = '',
    company = '',
    product = {},
}) {
  return (
    <div id='details' className='flex flex-col gap-4 mx-5 my-10'>
    <h1 className='text-3xl'>{name}</h1>
    <RatingStar stars={stars} reviews={reviews}/>
    <del><FormatCurrency number={parseInt(price +10000 )} /></del>
    <h3 className='text-blue-400'>Deal Of the Day:<FormatCurrency number={parseInt(price)} /></h3>
    <p className='text-justifyt-'>{description}</p>
    <div className='flex justify-evenly'>
          <div className='w-fit items-center justify-center flex flex-col'>
          <FaTruck className='text-4xl' />
          <span className='text-center'>Free Delivery</span>
          </div>
          <div className='w-fit items-center justify-center flex flex-col'>
          <RiRefund2Line className='text-4xl w-fit p-0' />
          <span className='text-center'>30 Days Replacement</span>
          </div>
          <div className='w-fit items-center justify-center flex flex-col'>
          <TbTruckDelivery  className='text-4xl'/>
          <span className='text-center'>Fast Delivery</span>
          </div>
          <div className='w-fit items-center justify-center flex flex-col'>
          <IoShieldSharp  className='text-4xl'/>
          <span className='text-center'>2 Years Warranty</span>
          </div>
    </div>
    <p>Available: <span>{stock > 0 ? 'IN STOCK':"OUT OF STOCK"}</span></p>
    <p>ID: {id}</p>
    <p>Brand: {company}</p>
    <hr className='text-xl w-[100%] text-black bg-black h-0.5'/>
    {stock > 0 && <AddToCart product={product}/>}
  </div>
  )
}

export default ProductDetails