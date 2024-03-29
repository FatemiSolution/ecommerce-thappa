import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
// import { ImCross } from "react-icons/im";
import { useAuth0 } from "@auth0/auth0-react";
import { ImCross } from "react-icons/im";
import { FaBagShopping } from "react-icons/fa6";
import { useDispatch,useSelector } from 'react-redux';
import { totalCal } from '../../store/cartSlice';
import Button from '../Button';
import {Filter} from '../index';
const Nav =()=>{
    // login logout functionality
    const { loginWithRedirect,logout, isAuthenticated } = useAuth0();
    //header drawer functionality
    const [isOpen, setIsOpen] = useState(false);
    // open and closing drawer functionality
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    //calculating item of the cart list
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(totalCal())
    }, [totalCal()])
    const data = useSelector((state)=>state.cart)
    // navling list functionality
    function NavLinks() {
      
      return (
        <>
        <NavLink className={'py-2 px-1 hover:text-[#008DDA] duration-200'} onClick={isOpen && toggleNavbar}  to={'/'}>Home</NavLink>
        <NavLink className={'py-2 px-1 hover:text-[#008DDA] duration-200'} onClick={isOpen && toggleNavbar}  to={'/about'}>About</NavLink>
        <NavLink  className={'py-2 px-1 hover:text-[#008DDA] duration-200'} onClick={isOpen && toggleNavbar} to={'/products'}>Products</NavLink>
        <NavLink className={'py-2 px-1 hover:text-[#008DDA] duration-200'}  onClick={isOpen && toggleNavbar} to={'/contact'}>Contact</NavLink>
            {/* for authButton */}
        {isAuthenticated ? <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} children='Logout'/>:<Button onClick={() => loginWithRedirect()} children='Login'/> }
        
       {/* cart  */}
        <NavLink className={'relative py-2 px-1 hover:text-blue-600 duration-200'} onClick={isOpen && toggleNavbar} to={'/cart'}>
                   <FaBagShopping className=''/>
                <span className='absolute bottom-4 bg-blue-400 text-gray-100 rounded-lg px-1  left-3 text-xs'>{data.total_items}</span>
        </NavLink>
        
        </>
      )
    }
    const filtershow=() =>{
        if(document.getElementById('filters').classList.contains('-left-96')) {
         document.getElementById('filters').classList.remove('-left-96');
         document.getElementById('filters').classList.add('left-0');
        }else{
         document.getElementById('filters').classList.add('-left-96');
         document.getElementById('filters').classList.remove('left-0');
        }
        
        }
    return(
        <>
           <div id='filters' className='w-48 absolute z-10 bg-gray-200 -left-96 top-0 '>
           <button className='p-4' onClick={filtershow} ><ImCross /></button>
           <Filter/>
           </div>
        <nav className=' flex justify-end'>
            <div className='hidden w-[100%] gap-2 sm:flex justify-between items-center '>
                <NavLinks/>
            </div>
            <div className='sm:hidden '>
                <button onClick={toggleNavbar}>{isOpen ? <ImCross /> : <GiHamburgerMenu />} </button>
            </div>
        </nav>
        {isOpen && (
            <div className='sm:hidden flex basis-full flex-col items-center ' >
                <NavLinks/>
            </div>
        )}
     
        </>
    )
}

export default Nav