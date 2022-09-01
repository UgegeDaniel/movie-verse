import React from 'react'
import './CategoriesStyle.css'
const Categories = ({genres, handleGenre}) => {
return (
<div className='categories'>
{genres?.map((genre, id)=>(<span key={id} onClick={(e)=>handleGenre(genre.name, genre.id)}>{genre.name.substring(0, 9)}</span>))}
</div>
)
}
export default Categories