import React from 'react'
import {  useNavigate,NavLink } from 'react-router-dom'

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
 
    return (
        <> 
        <NavLink to={navigates}>
        <button className={`px-3 py-2 rounded ${bgColor} ${textColor} ${className}`}  {...props }>
            {children}
        </button>
        </NavLink>
            
        
      
        </>
  )
}

export default Button