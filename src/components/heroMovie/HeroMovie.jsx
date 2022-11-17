import PropTypes from 'prop-types';
import './HeroMovieStyle.css'

const HeroMovie = ({ movie, isMobile }) => {

	const base_url = 'https://image.tmdb.org/t/p/original'
	const poster = movie ? `${base_url}${movie.backdrop_path}` : ''
	return (
		<section className='hero-movie'>
			<div className='img-container'><img src={poster} alt='backdrop_path' />
			</div>
		</section>
	)
}
HeroMovie.propTypes = {
	movie: PropTypes.object,
	isMobile: PropTypes.bool
}
export default HeroMovie
