import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../redux/userSlice';


const Login = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const isLoading = useSelector(store=>store.app.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    const user = { fullName, email, password };
    try {
      const res = await axios.post(`${API_END_POINT}/signin`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true

      })
      if (res.data.message) {
        toast.success(res.data.message);
      }
      navigate("/")
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);

    } finally{
      dispatch(setIsLoading(false));   
    }

    setFullName("");
    setEmail("");
    setPassword("");
  }

  return (
    <>

      {/* <Link to='/login'> */}
      <div className='flex justify-between items-center absolute z-10 w-full  px-[150px]'>
        <Link to='/'>
          <img src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png' alt='logo' className=' w-[150px] h-[80px] ' />
        </Link>
      </div>
      <div className=' '>
        <img className='absolute h-[100vh] w-full brightness-50 ' src='https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224740-3441109.png' alt='ko' />
      </div>


      <div>
        <form onSubmit={getInputData} className='w-[40%] mx-auto pt-[8%] absolute z-10 left-0 right-0'>
          <div className='bg-black opacity-85 rounded-md'>
            <h1 className='text-white font-bold text-2xl text-center pt-4'>Sign in</h1>
            <div className='flex flex-col items-center mt-3 '>
              <input value={fullName} onChange={(e) => setFullName(e.target.value)} type='text' placeholder='fullName' className='h-[55px] w-[280px] text-white m-3 outline-white rounded-md bg-zinc-900 border-2 px-4' />
              <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' className='h-[55px] w-[280px] text-white m-3 outline-white rounded-md bg-zinc-900 border-2 px-4' />
              <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='password' className='h-[55px] w-[280px] m-3 text-white outline-white rounded-md bg-zinc-900 border-2 px-4' />
              <button className='bg-[red] text-white h-[40px] w-[280px]  py-2 rounded-md mb-6'>{`${isLoading ? "loading...": "sign in"}`}</button>
            </div>
          </div>
        </form>
      </div>
      {/* </Link>  */}
    </>
  )
}

export default Login
