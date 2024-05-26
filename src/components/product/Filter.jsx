import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { TiTick } from "react-icons/ti";
import { Prizer, categorizor, colorizer, companier, maxPrizer, searching } from '../../store/productSlice';
import FormatCurrency from '../FormatCurrency';
import {Button} from '../../components'
import { ImCross } from "react-icons/im";
import { useMediaQuery } from 'react-responsive';
//todo need to set the price filter
function Filter() {
  // getting data from the store 
  const data = useSelector((state)=>state.product)
  //creating useState for the filters
  const [text, settext] = useState(data.searchText);
  const [category, setcategory] = useState(data.category)
  const [company, setcompany] = useState(data.company)
  const [color, setcolor] = useState(data.color)
const [price, setprice] = useState(data.Price)
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 880 });
  // function to get the list of properties of the product
  const uniqueProperty = (product,property) =>{
    let Property = product.map((curElem)=>{
       return curElem[property];
     })
    if(property === 'colors'){
        return Property =  [...new Set([].concat(...Property))]
    }else{

       return Property= ['All',...new Set(Property)]
    }

  }
  // getting the unique properties
  const uniqueCategory = uniqueProperty(data.products,'category');
  const uniqueCompany = uniqueProperty(data.products,'company');
  const uniqueColor = uniqueProperty(data.products,'colors');
// updating the properties in the store as the useState value changes 
    useEffect(() => {
    dispatch(searching(text));
    dispatch(categorizor(category))
    dispatch(colorizer(color))
    dispatch(companier(company))
    dispatch(Prizer(price))
   
  }, [text,settext,category,setcategory,company,setcompany,color,setcolor,price,setprice]);
  console.log(category)
  const reset = () => {
    settext('');
    setprice(data.maxPrice);
    setcolor('All');
    setcategory('All');
    setcompany('All');
    isMobile && filtershow();
  }
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
    <div className='gap-4 py-5 flex flex-col'>
    
       {/* <Button children="close" }/> */}
      {/* searching filter */}
    <form action="" className='py-3 flex-wrap flex'>
        <input type="text" placeholder='search box' value={text} className='border border-gray-600 P-1 h-auto max-w-44 w-auto' onChange={(e)=>settext(e.target.value)}/>
    </form>
    {/* // category filter */}
    <h3 className='font-semibold text-xl'>Category</h3>
      <div>{uniqueCategory.map((e)=>{
       return <button  className={`cursor-pointer block ${category == e ?'text-blue-800':''}`} name='category' value={e} onClick={(e)=>setcategory(e.target.value)} key={e}>{e}</button> 
      })}</div>
      {/* company filter  */}
       <h3 className='font-semibold text-xl'>Company</h3>
      <select name="" id="" className='border border-black p-0.5 h-auto max-w-44 w-auto' defaultValue={company} onChange={(e)=>setcompany(e.target.value)}>
        {uniqueCompany.map((ele)=>(
          <option key={ele} value={ele}>{ele}</option>
        ))}
      </select>
      {/* color */}
      <h3 className='font-semibold text-xl'>Colors:</h3>
      <p className='gap-2 flex flex-wrap items-center'>
            <button className={`rounded-full items-center opacity-100 w-5 h-5 ${'All' == color?'font-bold':'' } `} onClick={()=>setcolor('All')}>
                  All
                </button>
            {uniqueColor.map((Pcolor, index) =>(
                // {'&ensp;'}
                <button key={index} className={`rounded-full opacity-60 hover:opacity-100 w-5 h-5 ${Pcolor == color?'opacity-[100%]':'' }`} style={{backgroundColor:Pcolor}} onClick={()=>setcolor(Pcolor)}>
                    {Pcolor === color ?<TiTick className='text-white pl-1' />: null }
                </button>
            ))} 
        </p>
        {/* price  */}
      <FormatCurrency number={parseInt(data.Price)}/>
      <input type="range" name="price" min={data.minPrice} max={data.maxPrice} value={price=== 0 ? data.Price :price} onChange={(e)=>setprice(e.target.value)} />
      <Button children='Reset Filter' className='text-xl' navigates={'/products'} onClick={reset} />
     
    </div>
  )
}

export default Filter