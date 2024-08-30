import React, { useEffect } from 'react'
import Header from './Header'
import List from './List'
import { useSelector } from 'react-redux';
import useNowPlayMovie from '../hooks/useNowPlayMovie';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useNavigate } from 'react-router-dom';
import SearchMovie from './SearchMovie';
import BgVideo from './BgVideo';
import Footer2 from './Footer2';

const Browse = () => {
  const user = useSelector(store => store.app.user);
  const toggle = useSelector(store => store.movie.toggle);
  const navigate = useNavigate();


  useNowPlayMovie();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, []);



  return (
    <>
      <div className=''>
        <Header />
        {
          toggle ? <SearchMovie /> : (
            <div className='bg-zinc-900'>
              <BgVideo />
              <List />
            </div>
          )
        }
      </div>
      <div className=''>
      <Footer2/>
      </div>
    </>
  )
}

export default Browse
