import React, { useState } from 'react'
// todo remaining css 
function MyImages({
    images=[{url:''}],
}) {
  const [mainImage, setmainImage] = useState(images[0])
  return ( 
    <div className='flex flex-row py-5 items-center justify-center px-5'>
        <div className='w-[30%] sm:h-[30%] flex  flex-col gap-4  items-center justify-center'>
          {images.map((image,index)=>(
            <figure>
              <img className='' src={image.url} alt={image.filename} key={index} onClick={()=>setmainImage(image)} />
            </figure>
          ))}
        </div>
        <div className='w-[70%] sm:h-[70%] flex justify-center items-center pl-5'>
        <figure>
              <img src={mainImage.url} alt={mainImage.filename}  />
          </figure>
        </div>
  </div>
  )
}

export default MyImages