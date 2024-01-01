import React, { useEffect } from 'react'
import {HeroSection, Trusted} from '../components'
import { Services } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/productSlice'
import FeaturedProduct from '../components/FeaturedProduct'
function Home() {

  return (
    <>
      <HeroSection/>
        <FeaturedProduct/>
      <Services/>
      <Trusted/>
    </>
  )
}

export default Home