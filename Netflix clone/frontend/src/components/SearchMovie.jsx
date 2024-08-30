import axios from 'axios';
import React, { useState } from 'react'
import { options, SEARCH_MOVIE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../redux/searchSlice';
import MovieList from './MovieList';
import Header from './Header';


const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const { movieName, searchedMovie } = useSelector(store => store.searchMovie);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options);
      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);

    }
    setSearchMovie("");
  }

  return (
    <>
    <Header/>
      <div className='flex justify-center bg-zinc-900   pt-[10%] w-[100%]'>
        <form onSubmit={submitHandler} className='w-[50%]'>
          <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
            <input value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }} className='w-full outline-none rounded-md text-lg' type="text" placeholder='Search Movies...' />
            <button className='bg-red-800 text-white rounded-md px-4 py-2'>Search</button>
          </div>
        </form>
      </div>
      <div className='px-8 h-[70vh] bg-zinc-900'>
      {
        searchedMovie ? ( <MovieList tittle={movieName}  movies={searchedMovie}/>) : (<h1 className='text-white'>Movie not Found!!</h1>)
      }

      {/* {
        searchedMovie !== null ? <MovieList tittle={movieName} searchMovie={true} movies={searchedMovie}/> :<h1>Movie not Found!!</h1>
      
      } */}

      </div>
    </>
  )
}

export default SearchMovie
