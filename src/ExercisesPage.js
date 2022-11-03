import React, { useState, useEffect } from 'react'
import NewExerciseForm from './NewExerciseForm'
import ExerciseList from './ExerciseList.js'

function ExercisesPage() {
  const [exercisesArray, setExercisesArray] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/exercises")
      .then((r) => r.json())
      .then(exercisesArray => {
        setExercisesArray(exercisesArray)
      })
  }, []);

  console.log(exercisesArray)

function handleAddExercise(newExercise){
  const updateExercises = [...exercisesArray, newExercise]
  setExercisesArray(updateExercises)
}

function handleDeleteExercise(id){
  const updateExercises = exercisesArray.filter((e) => e.id !== id)
  setExercisesArray(updateExercises)
}

  return (
    <main>
      <NewExerciseForm handleAddExercise={handleAddExercise}   />
      <ExerciseList exercisesArray={exercisesArray} handleDeleteExercise={handleDeleteExercise} />
    </main>
  )
}

export default ExercisesPage
