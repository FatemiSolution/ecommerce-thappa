import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaBagShopping } from "react-icons/fa6";
const Nav =()=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    function NavLinks() {
      return (
        <>
        <NavLink className={'py-2 hover:text-blue-500 duration-200'} onClick={isOpen && toggleNavbar}  to={'/'}>Home</NavLink>
        <NavLink className={'py-2 hover:text-blue-500 duration-200'} onClick={isOpen && toggleNavbar}  to={'/about'}>About</NavLink>
        <NavLink  className={'py-2 hover:text-blue-500 duration-200'} onClick={isOpen && toggleNavbar} to={'/products'}>Products</NavLink>
        <NavLink className={'py-2 hover:text-blue-500 duration-200'}  onClick={isOpen && toggleNavbar} to={'/contact'}>Contact</NavLink>
        <NavLink className={'relative py-2 hover:text-blue-500 duration-200'} onClick={isOpen && toggleNavbar} to={'/cart'}>
                   <FaBagShopping className=''/>
                <span className='absolute bottom-4 left-3 text-xs'>10</span>
               </NavLink>
        
        </>
      )
    }

    return(
        <>
        
        <nav className='w-1/3 flex justify-end'>
            <div className='hidden w-[100%] md:flex justify-between items-center '>
                <NavLinks/>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleNavbar}>{isOpen ? <ImCross /> : <GiHamburgerMenu />} </button>
            </div>
        </nav>
        {isOpen && (
            <div className='flex basis-full flex-col items-center ' >
                <NavLinks/>
            </div>
        )}
        </>
    )
}

export default Nav