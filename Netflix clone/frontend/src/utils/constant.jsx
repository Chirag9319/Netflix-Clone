export const API_END_POINT ="http://localhost:3002/api/v1/user";
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDg1YzVjZWRiODcwMjM2OTgxNzk1NTg1NmNhMjY2ZiIsIm5iZiI6MTcyNDE2NTMzMy41Njk0NTksInN1YiI6IjY2YzRhYWExODYwMzAzODJjZjI0ZDliMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nnvb-5wIuJa7R7LMJQokjyqWThH3KotuyaKOCkYmKDs'
    }
  };

export const now_Playing_Movie = 'https://api.themoviedb.org/3/movie/now_playing';
export const now_Popular_movies = 'https://api.themoviedb.org/3/movie/popular';
export const now_Top_Rated = 'https://api.themoviedb.org/3/movie/top_rated';
export const upcomig_movies = 'https://api.themoviedb.org/3/movie/upcoming';

export const TMDB_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const  SEARCH_MOVIE_URL="https://api.themoviedb.org/3/search/movie?query=";