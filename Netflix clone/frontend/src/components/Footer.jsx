import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, setUser } from '../redux/userSlice';
import Footer2 from './Footer2';




const Footer = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const isLoading = useSelector(store => store.app.isLoading);
    const navigate = useNavigate();
    const dispatch = useDispatch();


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
            <div className='bg-black h-[200px]  mt-[100px] w-full '>
                <div className='text-white  w-[70%] mx-auto  '>
                    <h1>Ready to watch? Enter your email to create or restart your membership.</h1>
                    <form onSubmit={getOut} className=' flex mt-4 gap-4'>
                        <div className='flex gap-4  text-center w-[80%] mx-auto  '>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email address' className='outline-white opacity-80 bg-black w-[350px] h-[50px] rounded border-2 px-4' />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='password' className='outline-white opacity-80 bg-black w-[350px] h-[50px] rounded border-2 px-4' />
                        </div>
                        <div className=' text-center w-full mx-auto  '>
                            <button className='bg-[red] text-white w-[100%] py-3  rounded-md right-0 font-bold '>{`${isLoading ? "loading..." : "Get Started"}`}</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default Footer
