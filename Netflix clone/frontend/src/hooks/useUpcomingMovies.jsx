import React from 'react'
import { getUpcomingMovies } from '../redux/movieSlice';
import { options, upcomig_movies } from '../utils/constant';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(upcomig_movies,options);
        dispatch(getUpcomingMovies(res.data.results));
    } catch (error) {
        console.log(error);
        
    }
}

export default useUpcomingMovies
