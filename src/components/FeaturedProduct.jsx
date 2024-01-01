import { getAdapter } from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/productSlice';
import Product from './Product';

function FeaturedProduct() {
    const dispatch = useDispatch();
    // getting the state data 
  const data =  useSelector((state)=>state.product)
  // sending data to the extra reduucer and uploading to the product in the productSLice 
    useEffect(() => {
      dispatch(getAllProducts())
    
    }, [])
   console.log(data);
  return (
    <div className='lg:px-56 px-5 py-5 bg-gray-300'>
        <p>CHECK NOW</p>
        <h1 className='font-semibold text-2xl mb-3'>Our Feature Services</h1>
        <div className='grid md:grid-flow-col grid-flow-row flex justify-evenly'>
           {data.featureProducts.map((product)=>(
           <Product key={product.id} details={product}/>
           ))}
        </div>

    </div>
  )
}

export default FeaturedProduct