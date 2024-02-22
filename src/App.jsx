
import './App.css'
import {Outlet} from 'react-router-dom'
import Header from './components/header/Header'
import {Footer} from './components'
import { useDispatch, useSelector } from 'react-redux'
import {  getAllProducts } from './store/productSlice';
import { useEffect } from 'react'
function App() {
  const dispatch = useDispatch();
  const data =  useSelector((state)=>state.product)
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
//  console.log(data);
  return (
   <div className=''>
   <Header/>
   <main>
    <Outlet/>
   </main>
   <Footer/>
   </div>
  )
}

export default App
