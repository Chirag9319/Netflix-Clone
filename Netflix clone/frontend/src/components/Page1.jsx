import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, setUser } from '../redux/userSlice';
import Page from './Page';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Footer from './Footer';
import Footer2 from './Footer2';


const Page1 = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const isLoading = useSelector(store => store.app.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openSignin = () => {
    navigate("/signin");
  }

  const getOut = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    const user = { email, password };
    try {
      const res = await axios.post(`${API_END_POINT}/login`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true

      })
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(res.data.user));
      navigate("/browse");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);

    } finally {
      dispatch(setIsLoading(false));
    }
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div className='w-full'>
        <div className='flex justify-between items-center px-5  absolute z-10   w-full px-[130px]'>
          <img src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png' alt='logo' className=' w-[150px] h-[80px] ' />
          <div className='flex gap-6'>
            <button className='text-white border-2 px-8 rounded font-bold'>English</button>
            <button className='bg-[red] font-bold text-white px-4 py-2 rounded-md right-0' onClick={openSignin}>sign in</button>
          </div>
        </div>
        <div>
          <img className='object-cover h-[500px] w-full brightness-50 ' src='https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg' alt='ko' />
        </div>
        <div className='absolute -mt-[500px] z-10 text-white pt-[13%] ml-[14%] '>
          <h1 className='text-5xl font-extrabold'> Unlimited movies, TV shows and more</h1>
          <p className='text-2xl font-semibold text-center mt-4'>Watch anywhere. Cancel anytime.</p>
          <p className='text-xl text-center mt-4'>Ready to watch? Enter your email to create or restart your membership.</p>
          <form onSubmit={getOut}>
            <div className='flex gap-4  text-center w-[60%] mx-auto mt-4'>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email address' className='outline-white opacity-80 bg-black w-[350px] h-[50px] rounded border-2 px-4' />
              <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='password' className='outline-white opacity-80 bg-black w-[350px] h-[50px] rounded border-2 px-4' />
            </div>
            <div className=' text-center w-[60%] mx-auto mt-4'>
              <button className='bg-[red] text-white px-10 py-3 rounded-md right-0 font-bold '>{`${isLoading ? "loading..." : "Get Started"}`}</button>
            </div>
          </form>
        </div>
</div>


        <Page />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5/>


      </>
      )
}

      export default Page1
