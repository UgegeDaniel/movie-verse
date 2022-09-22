import PropTypes from 'prop-types';
import './HeroMovieStyle.css'
import { GoPrimitiveDot } from 'react-icons/go'

const HeroMovie = ({ movie, isMobile }) => {

	const base_url = 'https://image.tmdb.org/t/p/original'
	const poster = movie ? `${base_url}${movie.backdrop_path}` : ''
	return (
		<section className='hero-movie'>
			<div className='img-container'><img src={poster} alt='backdrop_path' />
			</div>
			<div className='movie-info-desc'>
				<h3 className='movie-title'>{movie?.name || movie?.title}</h3>
				<h6 className='year'>{movie?.release_date || movie?.first_air_date}</h6>
				<h6 className="pg">{movie?.adult ? '18+' : 'PG'}</h6>
				 {!isMobile && <>
				 <p className='overview'>{movie?.overview.substring(0, 250)}</p>
				{/* <div className='keywords'>
				{!isMobile && <p className='overview'>{movie?.overview.substring(0, 250)}</p>}
				<div className='keywords'>
					<span>Dystopian<GoPrimitiveDot /></span>
				</div> */}
				</>
}
			</div>
		</section>
	)
}
HeroMovie.propTypes = {
	movie: PropTypes.object,
	isMobile: PropTypes.bool
}
export default HeroMovie
