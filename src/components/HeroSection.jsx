import React from 'react'
import Button from './Button'

function HeroSection({
    name= 'Fatemi E-commerce',
}) {
  return (
    // <div className=' bg-blue-300 w-full max-h-full flex lg:px-52 md:py-10 px-10 flex-wrap '>
    //     <div className='md:w-1/2 pr-2 lg:py-20 pb-4' >
    //         <p className='text-gray-600'>Welcome To</p>
    //         <h1 className='font-bold text-3xl'>{name}</h1>
    //         <p  className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magnam, quos autem blanditiis praesentium id excepturi est deserunt ipsa? Delectus possimus distinctio unde doloribus earum hic asperiores voluptatum eos sapiente.</p>
    //         <Button children='Shop Now' className='font-semibold'/>
    //     </div>
    //     <div className='md:w-1/2 items-center'>
    //         <figure>
    //              <img className='w-[100%] ' src="\images\hero.jpg" alt="hero img" />
    //         </figure>
    //     </div>
    // </div>
  <section className="hero"style={{}}>
 

  <h4 className='font-semibold text-2xl  py-2'>Trade-in-offer</h4>
  <h2 className='font-bold text-5xl py-2'>Super Value Deals</h2>
  <h1 className='font-bold text-6xl  py-2'>On all products</h1>
  <p className=' py-2'>Save more with Coupans and upto 70% off</p>
  {/* <button>Shop Now</button> */}
  <Button children='Shop Now' className='font-semibold ' navigates={'/products'}/>
</section>
  )
}

export default HeroSection