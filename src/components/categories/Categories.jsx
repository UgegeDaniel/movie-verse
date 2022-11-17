import PropTypes from 'prop-types';
import './CategoriesStyle.css';
const Categories = ({ currentGenre, genres, setCurrentGenre }) => {
    return (
        <div className='categories'>
            {genres?.map((genre, id) => (
                <span
                    key={id}
                    onClick={(e) => setCurrentGenre({ id: genre.id, name: genre.name })}
                    className={currentGenre.id === genre.id && 'current'}>
                    {genre.name.substring(0, 9)}
                </span>))}
        </div>
    )
}
Categories.propTypes = {
    genres: PropTypes.array,
    handleGenre: PropTypes.func,
}
export default Categories