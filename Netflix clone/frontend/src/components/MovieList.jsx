import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({tittle,movies}) => {

  return (
    <>
    <div >
        <h1 className=' text-3xl text-white py-8 font-semibold'>{tittle}</h1>
      <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
        {
            movies?.map((movie)=>{
                return(
                    <MovieCard key={movie.id} id={movie.id} posterPath={movie.poster_path}/>
                )
            })
        }
        </div>
      </div>
      </div>
    </>
  )
}

export default MovieList
