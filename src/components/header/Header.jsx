import React from 'react'
import './HeaderStyle.css'
import {FaSearch} from 'react-icons/fa'
import Avatar from '../../assests/img/avatar.png';
const Header = ({searchTerm, setSearchTerm}) => {
return(
<header classame='header'>
<div className='title'>
	<h1>Movie</h1><span>Verse</span>
</div>
	<div className='header-right'>
<div className='search-bar'>
		<FaSearch className='search'/>
		<input className='search-input' placeholder="search your favorite movie" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
</div>
		<img src={Avatar} alt='avater'/>
	</div>
</header>
)
}
export default Header