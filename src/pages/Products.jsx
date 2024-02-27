import React, { useEffect } from 'react'
import { Filter, HeadingProducts, ListProduct } from '../components';
function Products() {

  return (
    <div className='flex lg:px-56 md:px-5'>
      <div className='w-[20%]'><Filter/></div>
      <div  className='w-[80%] flex flex-col'>
          <div className='h-[20%]'><HeadingProducts/></div>        
          <div><ListProduct/></div>
      </div>
    </div>
  )
}

export default Products