import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Header, Categories, MovieList, MovieInfo, HeroMovie
} from './components';
import {
  useFetch, useSearch, useTrailers, useGenres
} from './hooks';
import { handleGenre, randomMovie } from './utils';
import { urlParams } from './constants'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentGenre, setCurrentGenre] = useState({ id: null, name: 'all' })
  const [filteredMovies, setFilteredMovies] = useState([])
  // const [type, setType] = useState({ tv: 'movie', movieId: '' });
  const [movieInfo, setMovieInfo] = useState({ show: false, movie: {} });
  const { movieList } = useFetch(urlParams);
  const { searchResults } = useSearch(searchTerm);
  const { genres } = useGenres()
  // const { data: trailers } = useTrailers(`/${type.tv}/${type.movieId}`);

  // const getTrailer = (videos) => {
  //   const officialTrailer = videos?.find((video) => video.name === 'Official Trailer');
  //   const url = `https://www.youtube.com/watch?v=${officialTrailer?.key}`;
  //   return url;
  // };

  const allMovies = [...new Set(movieList.map((item) => item.movies).flat(1))]
  const randomHeroMovie = randomMovie(allMovies)
  useEffect(() => {
    setFilteredMovies(allMovies.filter((movie) => movie.genre_ids.includes(currentGenre.id)))
  }, [currentGenre.id])
  useEffect(() => {
    console.log({ randomHeroMovie })
  }, [randomHeroMovie])
  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchResults={searchResults} />
      <Categories setCurrentGenre={setCurrentGenre} genres={genres} currentGenre={currentGenre} />
      <HeroMovie movie={randomHeroMovie} />
      <div className="movielist-container">
        {
          (searchTerm && searchResults.length > 0)
          && <MovieList title="Search Results" movies={searchResults} setMovieInfo={setMovieInfo} />
        }
        {
          (currentGenre.id)
          && <MovieList title={`${currentGenre.name} Movies`} movies={filteredMovies} setMovieInfo={setMovieInfo} />
        }
        {
          movieList.map((movies, index) => (
            <MovieList key={index} title={movies.title} movies={movies.movies} setMovieInfo={setMovieInfo} />
          ))
        }
      </div>

      {movieInfo.show && <MovieInfo
        movie={movieInfo.movie}
        genres={genres}
        setMovieInfo={setMovieInfo}
      // setType={setType}
      />}
      {/* {movieInfo.show && <div className="bottom" />} */}
    </div>
  );
}
export default App;
