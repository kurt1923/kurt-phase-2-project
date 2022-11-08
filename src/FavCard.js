import React from 'react'

function FavCard({ exercise }) {
  const { name, image, bodypart } = exercise

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Body Part: {bodypart}</p>
    </li>
  )
}

export default FavCard