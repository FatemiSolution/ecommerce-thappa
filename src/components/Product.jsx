import React from 'react'
import { NavLink } from 'react-router-dom'
import {FormatCurrency} from '../components'
function Product({
    details,
    ...props
}) {

  return (
<NavLink className={'w-fit md:p-3 md:mx-2 border rounded-xl  bg-white'} {...props} to={`/singleproduct/${details.id}`}>
    <figure className='relative w-fit'>
        <img className=' flex  items-center rounded-t-xl justify-center lg:h-52' src={details.image} alt={details.name} />
        <figcaption className='absolute top-2 right-2 bg-white border rounded-xl px-2 border-spacing-4'>{details.category}</figcaption>
    </figure>
    <div className='grid grid-cols-2 px-2 py-1 justify-around'>
        <h3 className='font-semibold '>{details.name}</h3>
        <p className='text-right'><FormatCurrency number={details.price}/></p>
    </div>
</NavLink>
  )
}

export default Product