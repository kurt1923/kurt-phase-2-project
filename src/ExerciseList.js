import React from "react";
import ExerciseCard from "./ExerciseCard";

function ExerciseList({ exercisesArray, handleDeleteExercise, handleFavorites }) {

  const exerciseCards = exercisesArray
    .map((exercise) => (
      <ExerciseCard
        key={exercise.id}
        exercise={exercise}
        onDeleteExercise={handleDeleteExercise}
        handleFavorites={handleFavorites}
      />
    ))

  return (
    <ul className="cards">{exerciseCards}</ul>
  );
}

export default ExerciseList;