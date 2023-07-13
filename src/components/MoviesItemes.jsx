import React from 'react'
import Button from './Button'

const MoviesItemes = ({color, rating, title, image }) => {
  return (
    <div className='filmIt'>
        <img className='images' src={image}
        alt={title} />
        <Button rating={rating} color={color}  title={title}/>
    </div>
  )
}

export default MoviesItemes