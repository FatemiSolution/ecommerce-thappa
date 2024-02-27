import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci"
import { FaShieldAlt } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { RiRefund2Line } from "react-icons/ri";
function Services() {
  return (
    <>
        <div className='lg:mx-52 flex h-72 py-10    '>
            <div className='w-1/3 md:mx-5 mx-2 bg-gray-300 flex flex-col justify-center items-center rounded-3xl'>
                
                    <CiDeliveryTruck  className=' text-3xl xl:text-5xl m-3 bg-white rounded-3xl text-blue-700 p-2'/>
                    <span className='font-semibold'>Super Fast and Free Delivery.</span>
            </div>
            <div className='w-1/3  md:mx-5 mx-2 '>
                <div className='bg-gray-300  h-24 flex mb-4 justify-center items-center rounded-3xl '>
                <FaShieldAlt  className=' text-5xl m-3  bg-white rounded-3xl text-blue-700 p-2' />
                <span className='font-semibold'>Non Contact Shipping.</span>
                </div>
                <div className='bg-gray-300  h-24 flex mt-4 justify-center items-center rounded-3xl '>
                <RiRefund2Line  className=' text-5xl m-3  bg-white rounded-3xl text-blue-700 p-2' />
                <span className='font-semibold'>Money back gurantee.</span>
                </div>
            </div>
            <div className='w-1/3  md:mx-5 mx-2 bg-gray-300 flex flex-col justify-center items-center rounded-3xl'>
            <RiSecurePaymentFill  className=' text-5xl m-3 bg-white rounded-3xl text-blue-700 p-2'/> 
            <span className='font-semibold'>Super secure Payment system.</span>
            </div>
        </div>
    </>
  )
}

export default Services