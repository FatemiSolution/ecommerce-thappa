import React from 'react'
import { useSelector } from 'react-redux';
import Product from '../Product';
import ListView from './ListView';
// todo responsive for mobiles
function ListProduct() {
    const data =  useSelector((state)=>state.product)
 return data.grid ?  <div className='grid sm:grid-cols-3 gap-2 grid-flow-row  justify-evenly'>
        {
        data.filterProducts.map(product =>(
            <Product key={product.id} details={product}/>
        ))}
    </div> : data.filterProducts.map(product =>(
            <ListView key={product.id} details={product}/>
    ));
}

export default ListProduct
