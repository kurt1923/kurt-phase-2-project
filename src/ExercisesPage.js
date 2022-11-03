import React, { useState, useEffect } from 'react'
import NewExerciseForm from './NewExerciseForm'
import ExerciseList from './ExerciseList.js'
import Search from './Search'

function ExercisesPage() {
  const [exercisesArray, setExercisesArray] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/exercises")
      .then((r) => r.json())
      .then(exercisesArray => {
        setExercisesArray(exercisesArray)
      })
  }, []);

  console.log(exercisesArray)

  function handleAddExercise(newExercise) {
    const updateExercises = [...exercisesArray, newExercise]
    setExercisesArray(updateExercises)
  }

  function handleDeleteExercise(id) {
    const updateExercises = exercisesArray.filter((e) => e.id !== id)
    setExercisesArray(updateExercises)
  }

  const exercisesToDisplay= exercisesArray.filter((e) => 
  e.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewExerciseForm handleAddExercise={handleAddExercise} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExerciseList exercisesArray={exercisesToDisplay} handleDeleteExercise={handleDeleteExercise} />

    </main>
  )
}

export default ExercisesPage
