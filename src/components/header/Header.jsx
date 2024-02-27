import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBagShopping } from "react-icons/fa6";
import Logo from '../Logo';
import Nav from './Nav';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
function Header() {
    
   
  return (
    
    <header className='sticky top-0 h-auto sm:h-14 z-10 mx-auto flex w-full px-10 items-center flex-wrap justify-between bg-gray-300 '>
  
              <Logo/>
              <Nav/>
     

  
    </header>
    
  )
}

export default Header