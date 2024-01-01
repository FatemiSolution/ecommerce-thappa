import React from 'react'
import { NavLink } from 'react-router-dom'

function Product({
    key,
    details,
    ...props
}) {
  function formatCurrency(number, currencySymbol = 'Rs.', decimalPlaces = 1) {
    /**
     * Format a number as currency.
     *
     * @param {number} number - The number to be formatted.
     * @param {string} currencySymbol - The currency symbol to be used. Default is '$'.
     * @param {number} decimalPlaces - The number of decimal places. Default is 2.
     * @returns {string} - The formatted currency string.
     */
    const formattedNumber = number.toFixed(decimalPlaces).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return `${currencySymbol}${formattedNumber}`;
}
  return (
<NavLink className={'w-fit md:p-3 md:mx-2 border rounded-xl  bg-white'} to={`/singleproduct/:${details.id}`}>
    <figure className='relative w-fit'>
        <img className=' flex  items-center justify-center lg:h-52' src={details.image} alt={details.name} />
        <figcaption className='absolute top-2 right-2 bg-white border rounded-xl px-2 border-spacing-4'>{details.category}</figcaption>
    </figure>
    <div className='grid grid-cols-2 px-2 py-1 flex justify-around'>
        <h3 className='font-semibold '>{details.name}</h3>
        <p className='text-right'>{formatCurrency(details.price)}</p>
    </div>
</NavLink>
  )
}

export default Product