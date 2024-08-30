import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { getNowPopularMovies } from '../redux/movieSlice';
import { now_Popular_movies, options } from '../utils/constant';

const usePopularMovies = async() => {
    const dispatch = useDispatch();
try {
    const res = await axios.get(now_Popular_movies,options)
    dispatch(getNowPopularMovies(res.data.results));
} catch (error) {
    console.log(error);
    
}
}

export default usePopularMovies
