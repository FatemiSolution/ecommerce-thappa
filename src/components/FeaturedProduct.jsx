import { getAdapter } from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/productSlice';
import Product from './Product';
import { getProductDetails } from '../store/singleProductSlice';
function FeaturedProduct() {
    const dispatch = useDispatch();
    // getting the state data 
  const data =  useSelector((state)=>state.product)

   return (
    data.loading === false ? <div className='lg:px-56 px-5 py-5 bg-gray-300'>
        <p className='text-sm text-gray-600 '>CHECK NOW</p>
        <h1 className='font-semibold text-2xl mb-3'>Our Feature Services</h1>
        <div className='grid md:grid-flow-col gap-2 grid-flow-row  justify-evenly'>
           {data.featureProducts.map((product)=>(
           <Product key={product.id} details={product}/>
           ))}
        </div>

    </div> : (<h1>Loading...</h1>)
  )
}

export default FeaturedProduct