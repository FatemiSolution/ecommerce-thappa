
import './App.css'
import {Outlet} from 'react-router-dom'
import Header from './components/header/Header'
import {Footer} from './components'
function App() {
  
  return (
   <>
   <Header/>
   <main>
    <Outlet/>
   </main>
   <Footer/>
   </>
  )
}

export default App
