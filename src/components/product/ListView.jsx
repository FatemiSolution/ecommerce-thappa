import React from 'react'
import { NavLink } from 'react-router-dom'
import {Button, FormatCurrency} from '../index'
function ListView({
    details,
    ...props
}) {
    return (
        <div className={'w-full md:p-3 md:mx-2 flex border border-gray-300 my-2 justify-evenly gap-10 '} {...props} to={`/singleproduct/${details.id}`}>
            <figure className='relative w-fit'>
                <img className=' flex  items-center justify-center lg:h-52 lg:w-96' src={details.image} alt={details.name} />
                <figcaption className='absolute top-2 right-2 bg-white border rounded-xl px-2 border-spacing-4'>{details.category}</figcaption>
            </figure>
            <div className='px-2 py-1 gap-y-2'>
                <h3 className='text-2xl my-2 '>{details.name}</h3>
                <p className=' my-2'><FormatCurrency number={details.price}/></p>
                <p className='m my-2'>{details.description.substring(0,150) + ' ...'}</p>
                <Button children='Read More' navigates={`/singleproduct/${details.id}`} className='my-2'/>
            </div>
        </div>
          )
}

export default ListView