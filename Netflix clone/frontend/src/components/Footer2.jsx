import React from 'react'

const Footer2 = () => {
  return (
    <>
    <div className='bg-black  absolute h-[400px] w-full'>
    <div className='bg-black pt-8'>
        <div className='text-[gray] w-[70%] mx-auto '>
            <h1>Questions? Call 000-800-919-1694</h1>
            <div className='flex justify-between mt-8'>
            <div className='flex flex-col gap-2 underline'>
                <a href=''>FAQ</a>
                <a href=''>Investor Relations</a>
                <a href=''>Privacy</a>
                <a href=''>Speed Test</a>
            </div>
            <div className='flex flex-col gap-2 underline'>
                <a href=''>Help Centre</a>
                <a href=''>Jobs</a>
                <a href=''>Cookie Preferences</a>
                <a href=''>Legal Notices</a>
            </div>
            <div className='flex flex-col gap-2 underline'>
                <a href=''> Account</a>
                <a href=''>Ways to Watch</a>
                <a href=''>Corporate Information</a>
                <a href=''>Only on Netflix</a>
            </div>
            <div className='flex flex-col gap-2 underline'>
                <a href=''>Media Centre</a>
                <a href=''>Terms of Use</a>
                <a href=''>Contact Us</a>
            </div>
            </div>
            <button className='border-2 rounded bg-[#3A3A38] px-8 py-1 mt-14 text-white'>English</button>
            <h1 className=' mt-10 pb-8'>Netflix India</h1>
        </div>
        </div>
    </div>
</>
  )
}

export default Footer2
