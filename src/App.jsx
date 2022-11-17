import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Header, Categories, MovieList, MovieInfo, HeroMovie, VideoPlayback
} from './components';
import {
  useFetch, useSearch, useGenres, useTrailers
} from './hooks';
import { randomMovie } from './utils';
import { urlParams } from './constants'


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentGenre, setCurrentGenre] = useState({ id: null, name: 'all' })
  const [filteredMovies, setFilteredMovies] = useState([])
  const [movieInfo, setMovieInfo] = useState({ show: false, movie: {} });
  const [showTrailer, setShowTrailer] = useState(false);
  const { movieList } = useFetch(urlParams);
  const { searchResults } = useSearch(searchTerm);
  const { genres } = useGenres()
  const [currentId, setCurrentId] = useState(null)
  const trailer = useTrailers(currentId)
  const allMovies = [...new Set(movieList.map((item) => item.movies).flat(1))]
  const randomHeroMovie = randomMovie(allMovies)
  useEffect(() => {
    currentGenre.id
      && setFilteredMovies(
        allMovies.filter((movie) =>
          movie.genre_ids.includes(currentGenre.id))
          )
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          && <MovieList title={`Search Results for '${searchTerm}'`} movies={searchResults} setMovieInfo={setMovieInfo} />
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
        setCurrentId={setCurrentId}
        setShowTrailer={setShowTrailer}
      />}
      {showTrailer && <VideoPlayback trailer={trailer} setShowTrailer={setShowTrailer}/>}
    </div>
  );
}
export default App;
