import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayMovie:null,
        nowPopularMovies:null,
        nowTopRated:null,
        upcomingMovies:null,
        toggle:false,
        trailerMovie:null,
        open:false,
        id:"",
    },
    reducers:{
        getNowPlayMovie:(state,action)=>{
            state.nowPlayMovie = action.payload;
        },
        getNowPopularMovies:(state,action)=>{
            state.nowPopularMovies = action.payload;
        },
        getNowTopRated:(state,action)=>{
            state.nowTopRated = action.payload;
        },
        getUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
        setToggle:(state)=>{
            state.toggle=!state.toggle
        },
        getTrailerMovie:(state,action)=>{
            state.trailerMovie=action.payload;
        },
        setOpen:(state,action)=>{
            state.open=action.payload;
        },
        getId:(state,action)=>{
            state.id=action.payload;
        }
    }
})

export const {getNowPlayMovie,getNowPopularMovies,getNowTopRated,getUpcomingMovies,setToggle,getTrailerMovie,setOpen,getId} = movieSlice.actions;
export default movieSlice.reducer;