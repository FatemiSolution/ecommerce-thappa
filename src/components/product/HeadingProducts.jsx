import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import { view } from '../../store/productSlice'
import { FiGrid } from "react-icons/fi";
function HeadingProducts() {
    const dispatch = useDispatch()
   const data = useSelector((state)=>state.product)
    console.log(data)
  return (
    <div className='flex flex-row justify-between py-5'>
        <FiGrid className={`text-2xl m-1 cursor-pointer ${data.grid?'bg-slate-800 p-1 text-white':''}`} onClick={()=>dispatch(view(!data.grid))}/>
        <div>Available Items are {data.filterProducts.length}</div>
        <div>
          <form action="#">
          <label htmlFor="sort"></label>
          <select className='border border-black p-1' name="sort" id="">
            <option value="lowest">Price(lowest)</option>
            <option value="lowest">Price(highest)</option>
            <option value="lowest">Price(A to Z)</option>
            <option value="lowest">Price(Z to A)</option>
          </select>

          </form>
        </div>
    </div>
  )
}

export default HeadingProducts

