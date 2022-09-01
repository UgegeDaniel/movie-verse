import React from 'react'
import './HeaderStyle.css'
import {FaSearch} from 'react-icons/fa'
const Header = ({searchTerm, setSearchTerm}) => {
return(
<header classame='header'>
	<div className='title'>
	<h1>Movie</h1><span>Verse</span>
	</div>
	<div className='header-right'>
	<div className='search-bar'>
	<FaSearch className='search'/>
	<input className='search-input' placeholder="search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
</div>
	</div>
</header>
)
}
export default Header
