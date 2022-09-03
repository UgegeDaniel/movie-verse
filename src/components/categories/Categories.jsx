import PropTypes from 'prop-types';
import './CategoriesStyle.css';
const Categories = ({ genres, handleGenre }) => {
    return (
        <div className='categories'>
            {genres?.map((genre, id) => (
            <span key={id} onClick={(e) => handleGenre(genre.name, genre.id)}>
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