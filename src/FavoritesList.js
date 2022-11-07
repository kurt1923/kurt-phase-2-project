import React from 'react'
import FavCard from './FavCard';

function FavoritesList({exercisesArray}) {
  
    const favCards = exercisesArray
    .map((exercise) => (
      <FavCard
        key={exercise.id}
        exercise={exercise}
      />
    ))
    
  return (
    <ul className="cards">{favCards}</ul>
  );
}
export default FavoritesList