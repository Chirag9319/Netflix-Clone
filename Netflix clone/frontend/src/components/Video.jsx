import React from 'react'
import { useSelector } from 'react-redux'
import useMovieById from '../hooks/useMovieById';


const Video = ({id,bool}) => {
    
  const trailerMovie = useSelector(store=>store.movie?.trailerMovie);

  useMovieById(id);

  return (

    <div className='w-[vw] overflow-hidden '>
     <iframe className={`${bool ? "w-[100%]" : "w-screen aspect-video" } `}
      src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
      title="YouTube video player"
      allowFullScreen>

     </iframe>        
    </div>
  )
}

export default Video
