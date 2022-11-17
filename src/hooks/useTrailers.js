import { useState, useEffect } from 'react';
import {
	API_KEY, BASE_URL, LANGUAGE, YT_URL
  } from '../constants';


const useTrailers = (currentId) => {
  const [trailer, setTrailer] = useState('')
	useEffect(()=>{ 
		const fetchTrailerUrl = async() => {
			const getTrailerUrl = `${BASE_URL}/movie/${currentId}/videos?api_key=${API_KEY}${LANGUAGE}`;
			const getTrailerKey = await fetch(getTrailerUrl);
			const { results: getTrailerKeyResults } = await getTrailerKey.json();
			const getKey = (getTrailerKeyResults) => (
				getTrailerKeyResults.find(
					(item) => item.type === 'Trailer',
				)?.key
			);
			const trailerKey = getKey(getTrailerKeyResults);
			const trailerUrl = currentId ? `${YT_URL}${trailerKey}` : '';
			console.log({trailerUrl})
			setTrailer(trailerUrl)
		}
		currentId && fetchTrailerUrl();
	},[setTrailer, currentId])
  return trailer;
};

export default useTrailers;
