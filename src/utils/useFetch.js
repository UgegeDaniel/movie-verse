import React, { useState, useEffect } from 'react'

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

 const fetchMovies= async (url) => {
    setLoading(true);    
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data.results || data.genres)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(`${BASE_URL}${urlParams}?api_key=${API_KEY}&language=en-US`)
  }, [urlParams])

  return { loading, data }
}

export default useFetch

