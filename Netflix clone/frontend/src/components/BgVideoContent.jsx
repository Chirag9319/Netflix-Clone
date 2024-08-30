import React from 'react'

const BgVideoContent = ({title,overview}) => {
  return (                           
    <>
   <div className=' absolute z-10 top-[20%] left-[5%]'> 
        <h1 className='text-white font-bold text-5xl'>{title}</h1>
        <p className='text-white mt-4 w-[50%]'>{overview}</p>
        <div className='mt-4'>
            <button className='text-black font-semibold bg-white rounded-md px-6 py-2'>Play</button>
            <button className='text-black font-semibold bg-white rounded-md px-6 py-2 ml-4'>My List</button>
            
        </div>
      </div>
    </>
  )
}

export default BgVideoContent
