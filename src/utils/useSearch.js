import React, { useState, useEffect } from 'react'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const useSearch = (urlParams, searchTerm) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

 const searchMovies= async (url) => {
    setLoading(true);    
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data?.results)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
    useEffect(() => {
       searchMovies(`${BASE_URL}${urlParams}?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
      }, [searchTerm, urlParams])

  return { loading, data }
}

export default useSearch;