import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import { view } from '../../store/productSlice'

function HeadingProducts() {
    const dispatch = useDispatch()
   const data = useSelector((state)=>state.product)
    console.log(data)
  return (
    <div>
        <Button onClick={()=>dispatch(view(!data.grid))}/>
    </div>
  )
}

export default HeadingProducts

