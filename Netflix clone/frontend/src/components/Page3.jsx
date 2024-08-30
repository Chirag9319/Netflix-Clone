import React from 'react'

const Page3 = () => {
  return (
    <>
    <div className='bg-black h-[500px] w-full border-t-4 border-[gray] '>
        <div className='text-white  w-[50%]  '>
            <div className='mt-[25%] ml-[15%]'>
            <h1 className='text-5xl font-bold '>Watch everywhere </h1>
            <p className='mt-3'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
        </div>
        <div className=' -mt-[230px] ' >
            <div className='absolute right-0 mt-14'>
                <div className='ml-[130px] '>
                    <video autoPlay loop className='w-[350px] ml-10 ' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"></video>
                </div>
                <div className='-mt-[230px]  '>
                    <img className='size-[80%] ml-16 ' src="https://github.com/burakorkmez/mern-netflix-clone/blob/master/frontend/public/device-pile.png?raw=true" alt="" />
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Page3
