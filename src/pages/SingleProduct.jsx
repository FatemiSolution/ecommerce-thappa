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
    
    <div className='flex md:flex-row flex-col lg:px-52  justify-center lg:gap-8  gap-5'>
       <MyImages images={image} />
        <ProductDetails company={company} description={description} id={id} name={name} price={price} reviews={reviews} stars={stars} stock={stock} product ={details.product} />
    </div>
    </>
  )
}

export default SingleProduct