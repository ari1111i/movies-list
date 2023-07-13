import React from 'react'
import MoviesItemes from './MoviesItemes'

const MovieList = ({ movies = [] }) => {
  return movies.map((movies) => {
    return <MoviesItemes image={movies.image} title={movies.title} color={movies.color} id={movies.id}  rating={movies.rating} />
  })
}

export default MovieList 