export const urlParams = [
  { url: '/trending/all/day', id: 1, title: "Trending Movies" },
  { url: '/movie/top_rated', id: 2, title: "Top Rated Movies" },
  { url: '/tv/airing_today', id: 3, title: "Airing Today" },
  { url: '/movie/upcoming', id: 4, title: "Upcoming Movies" },
  // { url: '/movie/now_playing', id: 5, title: "Now Playing" },
];
export const API_KEY = process.env.REACT_APP_API_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3';
export const LANGUAGE = '&language=en-US';
