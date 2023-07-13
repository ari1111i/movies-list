import React from 'react'
import MovieList from './MovieList'

const MoviesCategory = ({ movieList = [] }) => {
  return (
    <div className="movi">
        <MovieList movies={movieList}/>
    </div>
  )
}

export default MoviesCategory