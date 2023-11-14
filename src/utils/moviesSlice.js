import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        trailerVideo : null,
        nowPlayingMovies:null,
        popularMovies : null,
        topRatedMovies: null,
        moviesUpComing : null,
    },

reducers : {
addTrailerVideo:(state,action)=>{
state.trailerVideo = action.payload
 },
addNowPlayingMovies : (state,action)=>{
state.nowPlayingMovies = action.payload
},
addPopularMovies : (state,action)=>{
state.popularMovies = action.payload
},
addTopRatedMovies : (state,action)=>{
state.topRatedMovies = action.payload
},
addMoviesUpComing : (state,action)=>{
    state.moviesUpComing = action.payload
},

},
})

 
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies, addMoviesUpComing} = moviesSlice.actions;
export default moviesSlice.reducer;