import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fitering} from '../../store/productSlice';
import Product from '../Product';
import ListView from './ListView';
// todo responsive for mobiles
function ListProduct() {
    const dispatch = useDispatch();
    const data =  useSelector((state)=>state.product)
      useEffect(() => {
        dispatch(fitering(data.products))
        
      }, [data]);// data is used for rendering (tooked 4 hrs)

      
      console.log(data);

 return data.grid ?  <div className='grid grid-cols-3'>
        {
        data.filterProducts.map(product =>(
            <Product key={product.id} details={product}/>
        ))}
    </div> : data.filterProducts.map(product =>(
            <ListView key={product.id} details={product}/>
    ));
}

export default ListProduct
