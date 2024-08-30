import React from 'react'

const Page = () => {
    return (
        <>
            <div className='bg-black h-[500px] w-full border-t-4 border-[gray] '>
                <div className='text-white  w-[50%]  '>
                    <div className='mt-[25%] ml-[15%]'>
                    <h1 className='text-5xl font-bold '>Enjoy on your Tv </h1>
                    <p className='mt-3'>watch on smart tvs, PlayStation,xbox,chromecast,Apple TV,Blu-Ray Players and more.</p>
                    </div>
                </div>
                <div className=' -mt-[230px] ' >
                    <div className='absolute right-0 mt-14'>
                        <div className='ml-[130px] '>
                            <video loop autoPlay className='size-[80%]' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
                        </div>
                        <div className='-mt-[338px]  '>
                            <img className='size-[80%] ml-14 ' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
