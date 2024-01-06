import React, { useId } from 'react'
import { forwardRef } from 'react';
function Input({
    label,
    type= 'text',
    classname= '',
    id,
    ...props

},ref) {
    // const id = useId();
    // {console.log(ref)}
  return (
    <div className='flex items-center'>
    {label && <label id={id} className='inline-block m-1 mt-2 font-sans text-base'>
        {label}
        </label>}
        {<input id={id} className={`${classname} m-3 p-1 mt-5 pl-2 text-base border border-gray-300 rounded-lg outline-0`} type={type} {...props} ref={ref} />}
    </div>
  )
}

export default forwardRef(Input);