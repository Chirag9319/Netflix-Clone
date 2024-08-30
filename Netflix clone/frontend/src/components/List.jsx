import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const List = () => {
      const movie = useSelector(store=>store.movie)
  return (
    <>
     <div className='text-white -mt-[350px] '>
        <div className='mt-5 px-5 gap-6 '>
            <MovieList tittle={"Play movies"} movies ={movie.nowPlayMovie}/>
            <MovieList tittle={"Popular movies"} movies ={movie.nowPopularMovies}/>
            
            <MovieList tittle={"Top Rated movies"} movies ={movie.nowTopRated}/>
            <MovieList tittle={"Upcoming movies"} movies ={movie.upcomingMovies}/>
             </div>  
            </div>            
    </>
  )
}

export default List
