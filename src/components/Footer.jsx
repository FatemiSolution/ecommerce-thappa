import React from 'react'
import {Button, Input} from './index'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className='' >
        <div className='relative h-20 mx=auto'>

       <div className='flex justify-between w-[60%] items-center m-auto px-4 py-3 md:px-10 md:py-7 rounded-lg absolute  right-[23%] -bottom-[70%]
        bg-gray-200'>
           <div className='flex flex-col'>
                <span>Ready to get started?</span>
                <span>talk to us</span>
            </div> 
            <Button children='Get Started' className='bg-blue-500 md:px-3 md:py-2 text-white font-semibold rounded-lg' navigates={'/contact'} />
        </div> 
        </div>
        {/* main footer bg-[#008DDA]  */}
        <footer className='flex md:flex-row md:h-56 h-[34rem] flex-col 008DDA bg-gray-400 lg:px-[20%] md:px-[5%] gap-5 px-[10%]  md:p-auto'>
            <div className=' mt-20'>
                <p className=' text-base'>Fatemi Solutions</p>
                <p className='mt-3 text-sm  ' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ducimus cupiditate.
                </p>
            </div>
            <div className='md:mx-auto sm:mx-[10%] mt-5 md:mt-20'>
                <p className=' text-sm '>Subscribe to get important updates.</p>
                <form action="#">
                <Input placeholder='Your Email' className='px-3  text-sm  border mt-3 border-gray-300 rounded-lg'/>
                <Button type={'submit'} className='mt-3' children='subscribe'/>
                </form>
            </div>
            <div className='md:mx-auto sm:mx-[10%] mt-5 md:mt-20'>
                <span>Follow us</span>
                <div className='flex gap-2 mt-3'>
                <FaFacebook className='border bg-white rounded-full  text-3xl' />
                <FaInstagram className='border bg-white rounded-full  text-3xl' />
                <FaLinkedin className='border bg-white rounded-full  text-3xl' />
                </div>
            </div>
            <div className='md:mx-auto sm:mx-[10%] mt-5 md:mt-20 flex flex-col'>
                <span className=' text-sm '>Call Us</span>
                <span className='mt-3  text-sm '>+92 000000000</span>
            </div>
        </footer>
        <hr />
        <div className=' grid grid-cols-2 gap-20 bg-gray-400 justify-center lg:px-[30%] px-[20%] pt-2 pb-4'>
            <div>@{new Date().getFullYear()} Fatemi Solution. All right Reserved</div>
            <div className='flex flex-col'>
                <span>PRIVACY POLICY</span>
                <span>TERMS & CONDITIONS</span>
            </div>
        </div>
    </div>
  )
}
export default Footer