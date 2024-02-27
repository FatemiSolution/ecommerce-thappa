import React, { useEffect } from 'react'
import { Filter, HeadingProducts, ListProduct } from '../components';
import { useMediaQuery } from 'react-responsive';
function Products() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 880 });
  const isMobile = useMediaQuery({ maxWidth: 880 });
  return (
    <div className='flex justify-center xl:px-56 md:px-5'>
    {isTablet &&  <div className='w-[20%] '><Filter/></div>} 
      <div  className='w-[80%] flex flex-col'>

          <div className='h-[20%]'><HeadingProducts/></div>        
          <div><ListProduct/></div>
      </div>
    </div>
  )
}

export default Products