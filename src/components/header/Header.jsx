import PropTypes from 'prop-types';
import './HeaderStyle.css'
import { FaSearch } from 'react-icons/fa';
import { useCallback } from 'react';
import { debounce } from '../../utils'

const Header = ({ searchTerm, setSearchTerm, searchResults }) => {
	const handleChange = (e) => {
		setSearchTerm(e.target.value);
		console.log({ searchTerm })
	};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const optimisedSearch = useCallback(debounce(handleChange), []);
	return (
		<div>
			<header classame='header'>
				<div className='title'>
					<h1>Movie</h1><span>Verse</span>
				</div>
				<div className='header-right'>
					<div className="box">
						<form name="search">
							<input
								type="text"
								className="input"
								name="txt"
								onChange={optimisedSearch}
							/>
						</form>
						<FaSearch />
					</div>
				</div>
			</header>
			{/* {
				searchTerm
				&& <div className="headline">{`Showing search results for '${searchTerm}'`}</div>
			}
			{
				(searchTerm && searchResults.length === 0) && <div className="headline">{`No results found for '${searchTerm}'`}</div>
			} */}
		</div>
	)
}
Header.propTypes = {
	searchTerm: PropTypes.string,
	setSearchTerm: PropTypes.func
}
export default Header
