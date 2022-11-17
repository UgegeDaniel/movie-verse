import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa'
import { BsPlayFill } from 'react-icons/bs'
import { useEffect } from 'react'
import './MovieInfoStyle.css'
import { IMG_URL } from '../../constants';

const MovieInfo = ({ movie, genres, setMovieInfo, setCurrentId, setShowTrailer }) => {
	const poster = movie ? `${IMG_URL}${movie.poster_path}` : ''
	const backdrop = movie ? `${IMG_URL}${movie.backdrop_path}` : ''
	const { id, title, name, overview, release_date, first_air_date, genre_ids } = movie
	const movieGenres = genres.filter((genre) => genre_ids.includes(genre.id))

	useEffect(() => {
		setCurrentId(id)
	}, [setCurrentId, id])

	return (
		<div className="modal">
			<div className="modal-content">
				<span className="close" onClick={() => setMovieInfo({ show: false, movie: null })}><FaTimes /></span>
				<div>
					<div className="movie_card">
						<div className="info_section">
							<div className="movie_header">
								<img className="poster" src={poster} alt="poster" />
								<h1>{title || name}</h1>
								<h4>{release_date || first_air_date}</h4>
								<div className="genre">{movieGenres.map((genre) => <p key={genre.id}>{genre.name}</p>)}</div>
							</div>
							<div className="movie_desc">
								<p className="text">
									{overview}
								</p>
							</div>
							<div className="movie_social">
								<li><BsPlayFill className="play-btn" onClick={()=> setShowTrailer(true)}/></li>
							</div>
						</div>
						<div className="blur_back bacdrop"><img src={backdrop} alt="backdrop" /></div>
					</div>
				</div>
			</div>
		</div>
	)
}
MovieInfo.propTypes = {
	movie: PropTypes.object,
	setMovieInfo: PropTypes.func,
	trailerUrl: PropTypes.string,
}
export default MovieInfo
