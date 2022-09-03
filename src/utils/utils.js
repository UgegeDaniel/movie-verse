const handleGenre = (id, movieArray, onResult) => {
const filterResult = movieArray?.filter((movie)=>movie.genre_ids.includes(id));
onResult(filterResult)
}

const randomMovie=(movieArray)=>{
   const random = Math.floor(Math.random()*movieArray?.length)
   const heroMovie = movieArray[random] 
 return heroMovie
}

export {handleGenre, randomMovie}