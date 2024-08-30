import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setToggle } from '../redux/movieSlice';
import axios from 'axios';
import { setUser } from '../redux/userSlice';
import toast from 'react-hot-toast';
import { API_END_POINT } from '../utils/constant';

const Header = () => {

  const user = useSelector((store)=>store.app.user);
  const toggle = useSelector(store=>store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleHandler = () =>{
    dispatch(setToggle());
  }

  const logoutHandler = async ()=>{
    const res = await axios.get(`${API_END_POINT}/logout`);
    if(res.data.success){
      toast.success(res.data.message);
    }
    dispatch(setUser(null));
    navigate("/");
  }
  return (
    <>
      <div className='flex justify-between items-center absolute z-10 w-full  px-14 '>

      <img src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png' alt='logo' className=' w-[150px] h-[80px] '/>
          <div className='flex gap-6 items-center'>
          <IoIosArrowDropdown size="24px" color='white' />
          {/* <h1 className='text-lg font-medium text-white'>{`${user.fullName}`}</h1> */}
          <button onClick={logoutHandler} className='bg-[red] font-bold text-white px-4 py-2 rounded-md right-0'>Logout</button>
          {/* <Link to='/search'> */}
          <button onClick={toggleHandler} className='bg-[red] font-bold text-white px-4 py-2 rounded-md right-0'>{toggle ? "Home": "Search Movie"}</button>
          {/* </Link> */}
          </div>
        </div>      
    </>
  )
}

export default Header
