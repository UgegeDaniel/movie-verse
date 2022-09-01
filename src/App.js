import React, { useState, useEffect } from 'react'
import './App.css'
import {Header, Categories, HeroMovie, HeroControls, MovieList, MovieInfo} from './components'
import {useFetch, useSearch, useTrailers, handleGenre, randomMovie} from './utils'

function App() {
const [searchTerm, setSearchTerm] = useState('')
const [type, setType] = useState({tv:"movie", movieId:""})
const [movieInfo, setMovieInfo] = useState({show:false, movie:{}})
const [allMovies, setAllMovies] = useState([])
const [filteredMovies, setFilteredMovies]= useState([])

  const {loading} = useFetch();
  const { data: trending } = useFetch('/trending/all/day')
  const { data: topRated } = useFetch('/movie/top_rated')
  const { data: airingToday } = useFetch('/tv/airing_today')
  const { data: upComing } = useFetch('/movie/upcoming')
  const { data: nowPlaying } = useFetch('/movie/now_playing')
  const { data: searchResults } = useSearch('/search/movie', searchTerm)
  const { data: genres} = useFetch('/genre/movie/list')
  const { data: trailers } = useTrailers(`/${type.tv}/${type.movieId}`)

const getTrailer = (videos) => {
  const officialTrailer = videos?.find((video)=>video.name === "Official Trailer")
  const url =  `https://www.youtube.com/watch?v=${officialTrailer?.key}`
 return url
}

useEffect(()=>{
setAllMovies(allMovies.concat(trending, topRated, airingToday))
}, [trending, topRated, airingToday])

const randomHeroMovie = randomMovie(allMovies)
const trailerUrl = getTrailer(trailers)

  return (
<div className='App'>
<Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
<Categories handleGenre={handleGenre} genres={genres}/>
<HeroMovie movie={randomHeroMovie}/>
<HeroControls/>
{searchTerm ?
<MovieList title='Search Results' movies={searchResults} setMovieInfo={setMovieInfo}/>
: (filteredMovies.length > 0) &&
<MovieList title='Search Results' movies={filteredMovies} setMovieInfo={setMovieInfo}/>
}
<MovieList title='Trending Movies' movies={trending} setMovieInfo={setMovieInfo}/>
<MovieList title='Top Rated Movies' movies={topRated} setMovieInfo={setMovieInfo}/>
<MovieList title='Airing Today' movies={airingToday}setMovieInfo={setMovieInfo}/>
<MovieList title='Upcoming Movies' movies={upComing} setMovieInfo={setMovieInfo}/>
<MovieList title='In Cinemas Now' movies={nowPlaying} setMovieInfo={setMovieInfo}/>
{
movieInfo.show && <MovieInfo movie={movieInfo.movie} setMovieInfo={setMovieInfo} setType={setType} trailerUrl={trailerUrl}/>
}

</div>
  )
}

export default App