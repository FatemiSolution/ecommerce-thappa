import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getProductDetails } from '../store/singleProductSlice';

import { FormatCurrency, MyImages, ProductDetails } from '../components';
// const formatCurrency=(number, currencySymbol = 'Rs.', decimalPlaces = 1)=> {
//   /**
//    * Format a number as currency.
//    *
//    * @param {number} number - The number to be formatted.
//    * @param {string} currencySymbol - The currency symbol to be used. Default is '$'.
//    * @param {number} decimalPlaces - The number of decimal places. Default is 2.
//    * @returns {string} - The formatted currency string.
//    */
//   const formattedNumber = number.toFixed(decimalPlaces).replace(/\d(?=(\d{3})+\.)/g, '$&,');
//   return `${currencySymbol}${formattedNumber}`;

// }


function SingleProduct() {
  const {id} = useParams();
  const navigate = useNavigate();
  console.log('Single Product id is', id);
  const details = useSelector((state)=>state.productDetails)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(id))
  }, [])
  console.log(details.product);
  const {category,company, description,featured,image
  ,name,price,reviews,stars,stock} = details.product;

  if(details.loading){
    return <div>loading...</div>
  }else return (
    <>
    <nav className='bg-gray-300 w-full flex items-center py-2 justify-start px-4'>
      <span onClick={()=>(navigate('/'))} className='text-blue-400 cursor-pointer'>Home&nbsp;</span>
      <span className='text-gray-950 font-semibold  text-2xl'> /</span>
      <span >&nbsp;{ name}</span>
    </nav>
    
    <div className='grid grid-cols-2 lg:px-52 justify-center gap-5'>
       <MyImages images={image} />
        {/* <div id='details' className='flex flex-col'>
          <h1>{name}</h1>
          <span>{stars}</span>
          <span>{reviews}&nbsp;reviews</span>
          <del><FormatCurrency number={(price +10000 )} /></del>
          <h3 className='text-blue-400'>Deal Of the Day:<FormatCurrency number={(price)} /></h3>
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
        </div> */}
        <ProductDetails company={company} description={description} id={id} name={name} price={price} reviews={reviews} stars={stars} stock={stock} />
    </div>
    </>
  )
}

export default SingleProduct