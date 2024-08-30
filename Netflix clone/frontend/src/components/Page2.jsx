import React from 'react'

const Page2 = () => {
  return (
    <>
    <div className='bg-black  h-[500px] w-full border-t-4 border-[gray] '>

        <div className='' >
                    <img className='size-[40%] ml-14 ' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
                <div className='-mt-20 ml-[140px] absolute w-[330px]  mx-auto flex border-2 h-[100px] bg-black rounded-xl'>
                    <img className='w-[100px] h-[97px]  rounded-xl' src="https://github.com/burakorkmez/mern-netflix-clone/blob/master/frontend/public/stranger-things-sm.png?raw=true" alt="" />
                    <div className='ml-6 text-center py-6'>
                    <h1 className='text-white'>Stranger things</h1>
                    <h1 className='text-blue-600'>Downloading...</h1>
                    </div> 
                    <img className='rounded-xl size-[90px] ' src="https://github.com/burakorkmez/mern-netflix-clone/blob/master/frontend/public/download-icon.gif?raw=true" alt="" />
                </div>
        </div>
        <div className='text-white  '>
            <div className=' w-[50%] mx-auto -mt-[220px] ml-[600px]'>
            <h1 className='text-5xl font-bold '>Download your shows to <span>watch offline</span> </h1>
            <p className='mt-3'>Save your favourites easily and always have something to watch.</p>
            </div>
        </div>
    </div>
</>
  )
}

export default Page2
