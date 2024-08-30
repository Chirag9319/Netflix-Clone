import React from 'react'
import { useSelector } from 'react-redux'
import BgVideoContent from "./BgVideoContent";
import Video from './Video';

const BgVideo = () => {
  const movie = useSelector(store=>store.movie?.nowPlayMovie);

  if(!movie) return;

  const { overview,id,title}=movie[4];
  return (
    <>
   
    <Video id={id}/>
    <BgVideoContent title={title} overview={overview}/>

    </>

  )
}

export default BgVideo
