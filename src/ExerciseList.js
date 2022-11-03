import React from "react";
import ExerciseCard from "./ExerciseCard";

function ExerciseList({ exercisesArray, handleDeleteExercise }) {

  const exerciseCards = exercisesArray
    .map((exercise) => (
      <ExerciseCard
        key={exercise.id}
        exercise={exercise}
        onDeleteExercise={handleDeleteExercise}
        // onUpdateexercise={onUpdateexercise}
      />
    ))
    
  return (
    <ul className="cards">{exerciseCards}</ul>
  );
}

export default ExerciseList;