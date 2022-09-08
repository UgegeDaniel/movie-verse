import PropTypes from 'prop-types';
import { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { BsPlayFill } from 'react-icons/bs'
import './MovieInfoStyle.css'
const MovieInfo = ({ movie, setMovieInfo, setType, trailerUrl, setIsMobile }) => {
	const base_url = 'https://image.tmdb.org/t/p/original'
	const poster = movie ? `${base_url}${movie.poster_path}` : ''
	const { id, title, name, overview, release_date, first_air_date, adult, media_type, } = movie
	useEffect(() => {
		setType({ movie: media_type, movieId: id })
	}, [])
	return (
		<footer className='container'>
			<div className='movie-info'>
				<FaTimes onClick={() => { setMovieInfo({ show: false, movie }) }} />
				<div className='img-container'><img src={poster} alt='poster' /></div>
				<div className='movie-info-desc'>
					<h3>{name || title}</h3>
					<div className='year'><h6>{release_date || first_air_date}</h6>
						<h6 className="pg">{adult ? '18+' : 'PG'}</h6>
						{!setIsMobile && <p className='overview'>{overview.substring(0, 250)}</p>}
						<button className='white-fill'><BsPlayFill /><a href={trailerUrl} target="_blank">Watch Trailer</a></button>
					</div>
				</div>
			</div>
		</footer>
	)
}
MovieInfo.propTypes = {
    movie: PropTypes.object,
    setMovieInfo: PropTypes.func,
	setType: PropTypes.func,
    trailerUrl: PropTypes.string,
	setIsMobile: PropTypes.bool
}
export default MovieInfo