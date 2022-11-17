import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa'
import { BsPlayFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import './MovieInfoStyle.css'
import {
	API_KEY, BASE_URL, LANGUAGE
  } from '../constants';
const MovieInfo = ({ movie, genres, setMovieInfo }) => {
	const [trailer, setTrailer] = useState('')
	const base_url = 'https://image.tmdb.org/t/p/original'
	const YT_URL = 'https://www.youtube.com/embed/';

	const poster = movie ? `${base_url}${movie.poster_path}` : ''
	const backdrop = movie ? `${base_url}${movie.backdrop_path}` : ''
	const { id, title, name, overview, release_date, first_air_date, genre_ids } = movie
	const movieGenres = genres.filter((genre) => genre_ids.includes(genre.id))
	useEffect(()=>{
		const fetchTrailerUrl = async() => {
			const getTrailerUrl = `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}${LANGUAGE}`;
			const getTrailerKey = await fetch(getTrailerUrl);
			const { results: getTrailerKeyResults } = await getTrailerKey.json();
			const getKey = (getTrailerKeyResults) => (
				getTrailerKeyResults.find(
					(item) => item.type === 'Trailer',
				)?.key
			);
			const trailerKey = getKey(getTrailerKeyResults);
			const trailerUrl = id ? `${YT_URL}${trailerKey}` : '';
			console.log({trailerUrl})
			setTrailer(trailerUrl)
		}
		fetchTrailerUrl();
	},[id])


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
								<li><BsPlayFill className="close" /></li>
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
	setType: PropTypes.func,
	trailerUrl: PropTypes.string,
	setIsMobile: PropTypes.bool,
	isMobile: PropTypes.bool,
}
export default MovieInfo
