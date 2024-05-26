import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
function RatingStar({
    reviews,
    stars,
}) {
    // crating an Array of 5 length and using map function to iterate it
            const rating = Array.from({length: 5},(elem,index)=>{
            let number = index + 0.5;  
            return( 
                <span key={index}>
                    {
            stars >= index +1 ? (<FaStar className='text-yellow-500'/>) : stars >= number?(<FaStarHalfAlt className='text-yellow-500'/>) :(<FaRegStar className='text-yellow-500'/>)
                    }
                </span>
            )
                });
           
  return (
    <div className='flex items-center'>
       {rating} 
       <p className=' text-sm'>&ensp;({reviews} customer reviews)</p>
       {/* <FaStar/>// full  */}
       {/* <FaStarHalfAlt/> half  */}
       {/* <FaRegStar/> empty  */}
    </div>
  )
}

export default RatingStar