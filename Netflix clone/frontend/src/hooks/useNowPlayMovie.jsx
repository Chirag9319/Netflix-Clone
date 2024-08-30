import axios from "axios";
import {now_Playing_Movie ,options} from '../utils/constant';
import { getNowPlayMovie } from '../redux/movieSlice';
import { useDispatch } from "react-redux";



const useNowPlayMovie = async () =>{
    const dispatch = useDispatch();
    try {
      const res = await axios.get(now_Playing_Movie,options);
      dispatch(getNowPlayMovie(res.data.results));
       console.log(res);
       
    } catch (error) {
      console.log(error);
      
    }
  }
  export default useNowPlayMovie