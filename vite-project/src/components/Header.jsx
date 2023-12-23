import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBagShopping } from "react-icons/fa6";
import Logo from './Logo';
import Nav from './Nav';
function Header() {
    
   
  return (
    <header className='sticky top-0 z-10 mx-auto flex w-full px-10 items-center flex-wrap justify-between bg-gray-300 '>
        <Logo/>
        <Nav/>
    </header>
   
  )
}

export default Header