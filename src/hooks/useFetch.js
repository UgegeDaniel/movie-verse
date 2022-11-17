import { useState, useEffect } from 'react';
import { fetchUrlData } from '../utils'
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const useFetch = (urlParams) => {
  const [movieList, setMovieList] = useState([]);
  const allParams = urlParams.map((urlParam) =>
    fetchUrlData(`${BASE_URL}${urlParam.url}?api_key=${API_KEY}&language=en-US`)
  )
  useEffect(() => {
    Promise.all(allParams).then((values) => {
      console.log({values: values});
      const movies = values.map((value)=> value.results)
      const titles = urlParams.map((urlParam)=> urlParam.title)
      const movieList = movies.map((movie, index)=> {
        return{
          title: titles.find((title, titleIndex)=> index === titleIndex && title),
          movies: movie
        }
      })
      console.log({titles})
      setMovieList(movieList)
    });
  }, []);

  return { movieList };
};

export default useFetch;
