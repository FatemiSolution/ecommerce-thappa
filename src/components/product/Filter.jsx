import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { categorizor, companier, searching } from '../../store/productSlice';
function Filter() {
  const data = useSelector((state)=>state.product)
  const [text, settext] = useState(data.searchText);
  const [category, setcategory] = useState(data.category)
  const [company, setcompany] = useState(data.company)
  const [color, setcolor] = useState(data.color)
  const dispatch = useDispatch();
  //function to get the list of properties of the product
  const uniqueProperty = (product,property) =>{
    let Property = product.map((curElem)=>{
       return curElem[property];
     })
    if(property === 'colors'){
        return Property =  ['All',...new Set([].concat(...Property))]
    }else{

       return Property= ['All',...new Set(Property)]
    }

  }
  // const fproducts = data.filterProducts;
  const uniqueCategory = uniqueProperty(data.products,'category');
  const uniqueCompany = uniqueProperty(data.products,'company');
  const uniqueColor = uniqueProperty(data.products,'colors');
  console.log(uniqueColor)
  useEffect(() => {
    dispatch(searching(text));
    dispatch(categorizor(category))
    dispatch(companier(company))
  }, [text,settext,category,setcategory,company,setcompany])
  console.log(category)
  return (
    <>
    <form action="" className='py-5'>
        <input type="text" placeholder='search box' value={text} className='border border-gray-600' onChange={(e)=>settext(e.target.value)}/>
    </form>
    <h3 className='font-semibold text-xl'>Category</h3>
      <div>{uniqueCategory.map((e)=>{
       return <button  className={`cursor-pointer block ${category == e ?'text-blue-800':''}`} name='category' value={e} onClick={(e)=>setcategory(e.target.value)} key={e}>{e}</button> 
      })}</div>
       <h3 className='font-semibold text-xl'>Company</h3>
      <select name="" id="" className='border border-black p-0.5' defaultValue={company} onChange={(e)=>setcompany(e.target.value)}>
        {uniqueCompany.map((ele)=>(
          <option key={ele} value={ele}>{ele}</option>
        ))}
      </select>
    </>
  )
}

export default Filter