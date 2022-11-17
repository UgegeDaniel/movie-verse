export const fetchUrlData = async (url) => {
  try {
    const response = await fetch(url);
    const urlData = await response.json();
    return urlData
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const debounce = (debounceFxn) => {
  let timer
  return (e) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      debounceFxn(e);
    }, 1000);
  };
};
export const handleGenre = (id, movieArray, onResult) => {
  const filterResult = movieArray?.filter((movie) => movie.genre_ids.includes(id));
  onResult(filterResult);
};

export const randomMovie = (movieArray) => {
  const random = Math.floor(Math.random() * movieArray.length);
  const heroMovie = movieArray[random];
  return heroMovie;
};
