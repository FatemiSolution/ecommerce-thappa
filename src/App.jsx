
import './App.css'
import {Outlet} from 'react-router-dom'
import Header from './components/header/Header'
import {Footer} from './components'
import { useDispatch, useSelector } from 'react-redux'
import {  getAllProducts } from './store/productSlice';
import { useEffect } from 'react'
function App() {
  const dispatch = useDispatch();
  // `useSelector` is a hook that allows you to extract data from the Redux store state. It takes a selector function as an argument, which is used to select the part of the state you want to access.
  const data =  useSelector((state)=>state.product)
  useEffect(() => {
    // `useDispatch` is a hook that provides a reference to the `dispatch` function from the Redux store. You use this function to dispatch actions to the Redux store.
    dispatch(getAllProducts())
  }, [])
  return (
   <>
   <Header/>
    <main>
      {/* The `<Outlet />` component is used in React Router to render child routes within a parent route. */}
      <Outlet/>
    </main>
   <Footer/>
   </>
    )
}

export default App
