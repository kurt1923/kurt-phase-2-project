import React, { useState, useEffect } from 'react'
import NewExerciseForm from './NewExerciseForm'
import ExerciseList from './ExerciseList.js'
import Search from './Search'
import Favorites from './Favorites'

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

  function handleFavorites(id, isFavorited){
    const updateExercises = exercisesArray.map((e) => 
    e.id === id ? {...e, isFavorited} : e)
    setExercisesArray(updateExercises)
  }

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
  
  const filteredExercises = filterBy === "" ? exercisesToDisplay : exercisesToDisplay.filter((e) => e.bodypart === filterBy)



  return (
    <main>
      <NewExerciseForm handleAddExercise={handleAddExercise} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterBy={filterBy} setFilterBy={setFilterBy} />
      <ExerciseList exercisesArray={filteredExercises} handleDeleteExercise={handleDeleteExercise} handleFavorites={handleFavorites} />
    </main>
  )
}

export default ExercisesPage
