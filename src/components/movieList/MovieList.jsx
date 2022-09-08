import PropTypes from 'prop-types';
import './MovieListStyle.css'
import Logo from '../../assests/img/logo.png'
import notFound from '../../assests/img/notFound.png'
const base_url = 'https://image.tmdb.org/t/p/original'
const MovieList = ({ title, movies, setMovieInfo }) => {
    return (
        <section className='movie-list'>
            <h4 className='section-title'>{title}</h4>
            <div className='movie-carousel'>
                {movies?.map((movie, id) => {
                    const { poster_path, media_type } = movie
                    return (
                        <div key={id} className='movie-card' onClick={() => { setMovieInfo({ show: true, movie }) }}>
                            <img className='poster' src={`${base_url}${poster_path}` ? `${base_url}${poster_path}` : notFound} alt='movie poster' />
                            <span className='top-ten'>
                                <h6>TOP</h6><h4>10</h4>
                            </span>
                            <img className='logo' src={Logo} alt='logo' />
                            {media_type === 'tv' &&
                                <span className='new-episodes'>NEW EPISODES</span>
                            }
                        </div>
                    )
                })}

            </div>
        </section>
    )
}
MovieList.propTypes = {
    title: PropTypes.string,
    movies: PropTypes.array,
	setMovieInfo: PropTypes.func
}
export default MovieList