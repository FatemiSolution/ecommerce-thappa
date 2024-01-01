import React from 'react'
import {  useNavigate } from 'react-router-dom'

function Button({
    children='Shop Now',
    bgColor='bg-blue-400',
    textColor='text-white',
    navigates,
    type,
    className="",
    ...props
}) {
    const navigate = useNavigate();
    // creting function to navigate and using it through arrow function 
   const navigation = () =>{
      navigates?  navigate(navigates): null;
    }
    return (
        <> 
        <button onClick={()=> navigation()}  className={`px-3 py-2 rounded ${bgColor} ${textColor} ${className}`}  {...props }>
            {children}
        </button>
            
        
      
        </>
  )
}

export default Button