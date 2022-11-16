import React from "react";
import ExerciseCard from "./ExerciseCard";

function ExerciseList({ exercisesArray, handleDeleteExercise, handleFavorites, showVid, setShowVid }) {

  const exerciseCards = exercisesArray
    .map((exercise) => (
      <ExerciseCard
        key={exercise.id}
        exercise={exercise}
        onDeleteExercise={handleDeleteExercise}
        handleFavorites={handleFavorites}
        showVid={showVid}
        setShowVid={setShowVid}
      />
    ))

  return (
    <ul className="cards">{exerciseCards}</ul>
  );
}

export default ExerciseList;