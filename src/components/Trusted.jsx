import React from 'react'

function Trusted() {
  return (
    <div className=' bg-gray-300 py-12 md:p-12 h-60 flex flex-wrap justify-center items-center  w-full'>
        <span className='font-bold text-xl md:text-2xl'>Trusted By 1000+ Companies. </span>
        <ul className='flex flex-row items-center lg:justify-between md:justify-center md:gap-20 gap-10 lg:px-36  w-[90%]'>
            <li className='md:h=[15%] md:w-[15%]'><img src="https://www.freepnglogos.com/uploads/company-logo-png/brand-tibco-logo-palo-alto-company-png-34.png" alt="Tibco" /></li>
            <li className='md:h=[15%] md:w-[15%]'><img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-ford-logos-download-22.png" alt="Ford" /></li>
            <li className='md:h=[15%] md:w-[15%]'><img src="https://www.freepnglogos.com/uploads/company-logo-png/file-quechua-company-logo-wikimedia-commons-18.png" /></li>
            <li className='md:h=[15%] md:w-[15%]'><img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-disney-logo-brand-35.png" alt="walt Disney" /></li>
        </ul>
    </div>
  )
}

export default Trusted