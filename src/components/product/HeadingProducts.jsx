import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive';
import { FaFilter } from "react-icons/fa";
import { sorted, sorting, view } from '../../store/productSlice'
import { FiGrid } from "react-icons/fi";
import Button from '../Button';
function HeadingProducts() {
    const dispatch = useDispatch()
    const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 880 });
  const isMobile = useMediaQuery({ maxWidth: 880 });
   const data = useSelector((state)=>state.product)
   const [defaultSelect, setdefaultSelect] = useState(data.sort)
    console.log(data)
    // setting gridview to true  if the size is of mobile screen 
    useEffect(() => {
      isMobile && dispatch(view(true))
    }, [view()])
    
    //setting datasort
    useEffect(() => {
        dispatch(sorting(defaultSelect))
      }, [data.sort,defaultSelect])

    console.log(data.sort);
    // to view and hide the filter section
   const filtershow=() =>{
   if(document.getElementById('filters').classList.contains('-left-96')) {
    document.getElementById('filters').classList.remove('-left-96');
    document.getElementById('filters').classList.add('left-0');
   }else{
    document.getElementById('filters').classList.add('-left-96');
    document.getElementById('filters').classList.remove('left-0');
   }
   
   }
  return (
    <div className='flex flex-row justify-between py-5 px-3'>
       {isTablet ? <FiGrid className={`text-2xl m-1 cursor-pointer ${data.grid?'bg-slate-800 p-0.5 text-white':''}`} onClick={()=>dispatch(view(!data.grid))}/>: <button onClick={filtershow}><FaFilter /></button> } 
        <div className='items-center flex'>Available Items are {data.filterProducts.length}</div>
        <div  className='items-center flex'>
          <form action="#">
          <label htmlFor="sort"></label>
          <select className='border border-black p-1' name="sort"defaultValue={defaultSelect} id="sort" onChange={(e)=>{setdefaultSelect(e.target.value)}}>
            {/* <option value="mixed">Mix</option> */}
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Price(A to Z)</option>
            <option value="z-a" >Price(Z to A)</option>
          </select>

          </form>
        </div>
    </div>
  )
}

export default HeadingProducts

