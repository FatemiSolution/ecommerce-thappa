import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getAllProducts } from '../store/productSlice';
// import allProduct from '../store/filterSlice';

import {fitering} from '../store/productSlice'
function Products() {
  const dispatch = useDispatch();
const data =  useSelector((state)=>state.product)
  useEffect(() => {
    dispatch(fitering(data.products))
  }, [data])// data is used for rendering (tooked 4 hrs)

  console.log(data);




  return (
    <div className='flex lg:px-56'>
      <div className='w-[20%]'>Filters</div>
      <div  className='w-[80%] grid grid-rows-2'>
          <div>heading</div>        
          <div>products</div>
      </div>
    </div>
  )
}

export default Products