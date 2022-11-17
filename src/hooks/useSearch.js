import { useState, useEffect } from 'react';
import { API_KEY, BASE_URL, LANGUAGE } from '../constants'
import { fetchUrlData } from '../utils'
const useSearch = (searchTerm) => {
  const [searchResults, setSearchResults] = useState([]);
  const searchUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}${LANGUAGE}&page=1&query=${searchTerm}&include_adult=false`;
  useEffect(() => {
    const searchMovie = async () => {
      const { results } = await fetchUrlData(searchUrl);
      setSearchResults(results)
    }
    searchTerm && searchMovie()
  }, [searchTerm, searchUrl]);

  return { searchResults };
};

export default useSearch;
