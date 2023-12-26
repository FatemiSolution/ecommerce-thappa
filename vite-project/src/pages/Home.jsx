import React, { useEffect } from 'react'
import {HeroSection, Trusted} from '../components'
import { Services } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/productSlice'
function Home() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.product);
  useEffect(() => {
    dispatch(getAllProducts())
  
  }, [])
  console.log(data)
  return (
    <>
      <HeroSection/>
      <Services/>
      <Trusted/>
    </>
  )
}

export default Home