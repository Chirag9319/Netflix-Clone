import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { getNowTopRated } from '../redux/movieSlice';
import { now_Top_Rated, options } from '../utils/constant';

const useTopRated = async() => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(now_Top_Rated,options)
        dispatch(getNowTopRated(res.data.results));
    } catch (error) {
    console.log(error);
    
}
}

export default useTopRated
