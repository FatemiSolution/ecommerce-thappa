import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import { fitering, sorted, sorting, view } from '../../store/productSlice'
import { FiGrid } from "react-icons/fi";
function HeadingProducts() {
    const dispatch = useDispatch()
   const data = useSelector((state)=>state.product)
   const [defaultSelect, setdefaultSelect] = useState( 'lowest')
    console.log(data)
    dispatch(sorting(event.target.value))
  
 

      useEffect(() => {
      //  dispatch(sorting(data.sort === undefined?'lowest':data.sort)) 
        dispatch(sorted([...data.products]));
      }, [data.sort])
    console.log(data.sort);
   
  return (
    <div className='flex flex-row justify-between py-5 px-3'>
        <FiGrid className={`text-2xl m-1 cursor-pointer ${data.grid?'bg-slate-800 p-1 text-white':''}`} onClick={()=>dispatch(view(!data.grid))}/>
        <div>Available Items are {data.filterProducts.length}</div>
        <div>
          <form action="#">
          <label htmlFor="sort"></label>
          <select className='border border-black p-1' name="sort"defaultValue={defaultSelect} id="sort" onChange={()=>{setdefaultSelect(event.target.value); dispatch(sorting(defaultSelect))}}>
            <option value="mixed">Mix</option>
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

