import React from 'react'
import { forwardRef } from 'react'
function TextArea({
    cols,
    rows,
    id,
    label,
    ...props
},ref) {
    {console.log(ref)}
  return (
    <div className='flex'>
        {label &&  <label htmlFor="" className=' inline-block m-1 mt-4 font-sans text-base'  >{label}</label>}
        { <textarea name='message' id={id} ref={ref} className=' m-3 p-1 mt-5 pl-2 text-base border border-gray-300 rounded-lg outline-0' placeholder='Enter your message' required autoComplete='off' {...props} cols={cols} rows={rows}/>}
    </div>
  )
}

export default forwardRef(TextArea);