import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getAllProducts } from '../store/productSlice';

// import allProduct from '../store/filterSlice';

import {fitering} from '../store/productSlice'
import { HeadingProducts, ListProduct } from '../components';
function Products() {
 




  return (
    <div className='flex lg:px-56'>
      <div className='w-[20%]'>sort</div>
      <div  className='w-[80%] flex flex-col'>
          <div className='h-[20%]'><HeadingProducts/></div>        
          <div><ListProduct/></div>
      </div>
    </div>
  )
}

export default Products