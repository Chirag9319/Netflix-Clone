import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Footer from './Footer';
import Footer2 from './Footer2';

const Page5 = () => {
    const [isExpanded, setExpanded] = useState(false)
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)


    const toggleHandler1 = () => {
        setExpanded(!isExpanded);
    }

    const toggleHandler2 = () => {
        setOpen(!open);
    }
    const toggleHandler3 = () => {
        setOpen1(!open1);
    }
    const toggleHandler4 = () => {
        setOpen2(!open2);
    }
    const toggleHandler5 = () => {
        setOpen3(!open3);
    }
    const toggleHandler6 = () => {
        setOpen4(!open4);
    }


    return (
        <>
            <div className='bg-black  h-[full] w-full '>
                <div className='w-[60%] mx-auto text-white  '>
                    <h1 className='text-3xl font-semibold  mb-4'>Frequently Asked Questions</h1>
                <div className=''>
                        <div className='text-white'>
                            <button onClick={toggleHandler1}>{isExpanded ?
                                <>
                                    <div className='flex justify-between px-8 bg-[#353839] w-[758px] hover:bg-[#656565] py-6'>
                                        <div className='flex w-[170px] h-[30px] text-2xl '>What is Netflix?</div>
                                        <RxCross1 size={30} />
                                    </div>
                                    <div className='bg-[#353839] border-t-2 border-[gray] text-xl pt-2 px-2'><p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                                    <p className='mt-4 pb-2'>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p></div> </> :
                                <>
                                    <div className='flex justify-between px-8 bg-[#353839] w-[758px] py-6 hover:bg-[#656565]'>
                                        <div className='flex w-[170px] h-[30px] text-2xl  '>What is Netflix?</div>
                                        <IoMdAdd size={30} />
                                    </div>
                                </>
                            }
                            </button>

                        </div>
                    </div>
                    <div className=''>
                        <div className='text-white mt-4'>
                            <button onClick={toggleHandler2}>{open ?
                                <>
                                    <div className='flex justify-between px-8 bg-[#353839] w-[758px] hover:bg-[#656565] py-6'>
                                        <div className='flex w-[170px] h-[30px] text-2xl w-[50%] '>How much does Netflix cost?</div>
                                        <RxCross1 size={30} />
                                    </div>
                                    <div className='bg-[#353839] border-t-2 border-[gray] text-xl pt-2 px-2'><p className='pb-2'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p></div> </> :
                                <>
                                    <div className='flex justify-between px-8 bg-[#353839] w-[758px] hover:bg-[#656565] py-6 '>
                                        <div className='flex w-[170px] h-[30px] text-2xl w-[50%] '>How much does Netflix cost?</div>
                                        <IoMdAdd size={30} />
                                    </div>
                                </>
                            }
                            </button>

                        </div>
                    </div>
                    <div className=''>
                        <div className='text-white mt-4'>
                            <button onClick={toggleHandler3}>{open1 ?
                                <>
                                    <div className='flex justify-between px-8 bg-[#353839] w-[758px] hover:bg-[#656565]  py-6'>
                                        <div className='flex w-[170px] h-[30px] text-2xl w-[50%] '>Where can I watch?</div>
                                        <RxCross1 size={30} />
                                    </div>
                                    <div className='bg-[#353839] text-xl border-t-2 border-[gray] pt-2 px-2'><p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                                    <p className='pb-2  mt-4'>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p></div> </> :
                                <>
                                    <div className='flex justify-between px-8 bg-[#353839] w-[758px] py-6 hover:bg-[#656565]'>
                                        <div className='flex w-[170px] h-[30px] text-2xl w-[50%] '>Where can I watch?</div>
                                        <IoMdAdd size={30} />
                                    </div>
                                </>
                            }
                            </button>

                        </div>
                    </div>
                    <div className=''>
                        <div className='text-white mt-4'>
                            <button onClick={toggleHandler4}>{open2 ?
                                <>
                                    <div className='flex justify-between px-8 bg-[#353839] w-[758px] hover:bg-[#656565] py-6'>
                                        <div className='flex w-[170px] h-[30px] text-2xl w-[50%] '>How do I cancel?</div>
                                        <RxCross1 size={30} />
                                    </div>
                                    <div className='bg-[#353839] text-xl border-t-2 border-[gray] pt-2 px-2'><p className='pb-2'>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p></div> </> :
                                <>
                                    <div className='flex justify-between px-8 bg-[#353839] w-[758px] py-6 hover:bg-[#656565]'>
                                        <div className='flex w-[170px] h-[30px] text-2xl w-[50%] '>How do I cancel?</div>
                                        <IoMdAdd size={30} />
                                    </div>
                                </>
                            }
                            </button>

                        </div>
                    </div>
                    <div className=''>
                        <div className='text-white mt-4'>
                            <button onClick={toggleHandler5}>{open3 ?
                                <>
                                    <div className='flex justify-between px-8 bg-[#353839] w-[758px] hover:bg-[#656565]  py-6'>
                                        <div className='flex w-[170px] h-[30px] text-2xl w-[50%] '>What can I watch on Netflix?</div>
                                        <RxCross1 size={30} />
                                    </div>
                                    <div className='bg-[#353839] border-t-2 border-[gray] text-xl pt-2 px-2 '><p className='pb-2'>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p></div> </> :
                                <>
                                    <div className='flex justify-between px-8 bg-[#353839] w-[758px] py-6 hover:bg-[#656565]'>
                                        <div className='flex w-[170px] h-[30px] text-2xl w-[50%] '>What can I watch on Netflix?</div>
                                        <IoMdAdd size={30} />
                                    </div>
                                </>
                            }
                            </button>

                        </div>
                    </div>

                    <div className=''>
                        <div className='text-white mt-4'>
                            <button onClick={toggleHandler6}>{open4 ?
                                <>
                                    <div className='flex justify-between px-8 bg-[#353839] w-[758px] hover:bg-[#656565] py-6'>
                                        <div className='flex w-[170px] h-[30px] text-2xl w-[50%] '>Is Netflix good for kids?</div>
                                        <RxCross1 size={30} />
                                    </div>
                                    <div className='bg-[#353839] border-t-2 border-[gray] text-xl pt-2 px-2'><p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                                    <p className='mt-4 pb-2'>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p></div> </> :
                                <>
                                    <div className='flex justify-between px-8 bg-[#353839] w-[758px] py-6 hover:bg-[#656565]'>
                                        <div className='flex w-[170px] h-[30px] text-2xl w-[50%]'>Is Netflix good for kids?</div>
                                        <IoMdAdd size={30} />
                                    </div>
                                </>
                            }
                            </button>

                        </div>
                    </div>
                </div>
                <Footer />
                <Footer2 />
            </div>

        </>
    )
}

export default Page5
