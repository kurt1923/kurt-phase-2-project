import React, { useState, useEffect } from 'react'
import NewExerciseForm from './NewExerciseForm'
import ExerciseList from './ExerciseList.js'
import Search from './Search'

function ExercisesPage() {
  const [exercisesArray, setExercisesArray] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterBy, setFilterBy] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/exercises")
      .then((r) => r.json())
      .then(exercisesArray => {
        setExercisesArray(exercisesArray)
      })
  }, []);


  const exercisesToDisplay = exercisesArray.filter((e) =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase()))

  function handleAddExercise(newExercise) {
    const updateExercises = [...exercisesArray, newExercise]
    setExercisesArray(updateExercises)
  }

  function handleDeleteExercise(id) {
    const updateExercises = exercisesArray.filter((e) => e.id !== id)
    setExercisesArray(updateExercises)
  }
  // function handlefavorites(id){
  //   const updateExercises = exercisesArray.map((e) => {
  //     return e.id === id ? {} })
  // }

  const filteredExercises = filterBy === "" ? exercisesToDisplay : exercisesToDisplay.filter((e) => e.bodypart === filterBy)



  return (
    <main>
      <NewExerciseForm handleAddExercise={handleAddExercise} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterBy={filterBy} setFilterBy={setFilterBy} />
      <ExerciseList exercisesArray={filteredExercises} handleDeleteExercise={handleDeleteExercise} />

    </main>
  )
}

export default ExercisesPage
