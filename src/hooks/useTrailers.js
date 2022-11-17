import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3/';

const useTrailers = (urlParams) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchTrailers = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const urlData = await response.json();
      setData(urlData.results || urlData.genres);
      setLoading(false);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrailers(`${BASE_URL}${urlParams}/videos?api_key=${API_KEY}&language=en-US`);
  }, [urlParams]);

  return { loading, data };
};

export default useTrailers;
