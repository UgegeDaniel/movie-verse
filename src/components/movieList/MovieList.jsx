import PropTypes from 'prop-types';
import './MovieListStyle.css'
import notFound from '../../assests/img/notFound.png'
import { FaChevronCircleUp } from 'react-icons/fa';
import { useState } from 'react'
const base_url = 'https://image.tmdb.org/t/p/original'
const MovieList = ({ title, movies, setMovieInfo }) => {
    const [active, setActive] = useState(false);
    return (
        <section className='movie-list'>
            <div className='accordion'>
                <div className="accordion-items">
                    <div className="accordion-heading" onClick={() => setActive(!active)}>
                        <div>{title}</div>
                        <FaChevronCircleUp className={active ? 'toggleIcon' : 'notActive'} />
                    </div>

                    {active && <div className='movie-carousel'>
                        {movies?.map((movie, id) => (
                            <div key={id} className='movie-card' onClick={() => { setMovieInfo({ show: true, movie }) }}>
                                <img className='poster' src={movie.poster_path ? `${base_url}${movie.poster_path}` : notFound} alt='movie poster' />
                            </div>
                        ))}
                    </div>}
                </div>
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