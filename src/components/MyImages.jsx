import React, { useState } from 'react'

function MyImages({
    images=[{url:''}],
}) {
  const [mainImage, setmainImage] = useState(images[0])
  return (
    <div className='flex'>
        <div className='w-[30%] grid grid-rows-4'>
          {images.map((image,index)=>(
            <figure>
              <img src={image.url} alt={image.filename} key={index} onClick={()=>setmainImage(image)} />
            </figure>
          ))}
        </div>
        <div className='w-[70%]'>
        <figure>
              <img src={mainImage.url} alt={mainImage.filename}  />
          </figure>
        </div>
  </div>
  )
}

export default MyImages