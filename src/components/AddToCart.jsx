import React, { useState } from 'react'
import { TiTick } from "react-icons/ti";
function AddToCart({
    product = {},
}) {
    const {id, colors, stock } = product;
    const [bgcolor, setbgcolor] = useState(colors[0])
  return (
    <div>
        <p className='gap-2 flex items-center'>
            Colors:
            {colors.map((color, index) =>(
                // {'&ensp;'}
                <button key={index} className={`rounded-full opacity-60 hover:opacity-100 w-5 h-5 ${color === bgcolor?'opacity-100':'' }`} style={{backgroundColor:color}} onClick={()=>setbgcolor(color)}>
                    {color === bgcolor ?<TiTick className='text-white pl-1' />: null }

                       
                </button>
            ))}
        </p>
    </div>
  )
}

export default AddToCart
