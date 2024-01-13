import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { searching } from '../../store/productSlice';
function Filter() {
  const data = useSelector((state)=>state.product)
  const [text, settext] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searching(text));
  }, [text,settext])
  
  return (
    <>
    <form action="">
        <input type="text" placeholder='search box' value={text} className='border border-gray-600' onChange={(e)=>settext(e.target.value)}/>
    </form>
    </>
  )
}

export default Filter