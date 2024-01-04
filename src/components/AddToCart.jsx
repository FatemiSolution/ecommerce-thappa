import React from 'react'

function AddToCart({
    product = {},
}) {
    const {id, colors, stock } = product;
  return (
    <div>
        <p className='gap-2 flex items-center'>
            Colors:
            {colors.map((color, index) =>(
                // {'&ensp;'}
                <button key={index} className={'rounded-full w-5 h-5'} style={{backgroundColor:color}}>
                       
                </button>
            ))}
        </p>
    </div>
  )
}

export default AddToCart
