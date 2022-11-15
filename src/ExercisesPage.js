import React, { useState } from 'react'
import NewExerciseForm from './NewExerciseForm'
import ExerciseList from './ExerciseList.js'
import Search from './Search'


function ExercisesPage({ exercisesArray, setExercisesArray }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterBy, setFilterBy] = useState("")
  const [showForm, setShowForm] = useState(false)


  const exercisesToDisplay = exercisesArray.filter((e) =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const filteredExercises = filterBy === "" ? exercisesToDisplay : exercisesToDisplay.filter((e) => e.bodypart === filterBy)

  function handleAddExercise(newExercise) {
    const updateExercises = [...exercisesArray, newExercise]
    setExercisesArray(updateExercises)
  }

  function handleDeleteExercise(id) {
    const updateExercises = exercisesArray.filter((e) => e.id !== id)
    setExercisesArray(updateExercises)
  }

  function handleFavorites(updateExercise) {
    const updateExercises = exercisesArray.map((e) =>
      e.id === updateExercise.id ? updateExercise : e)
    setExercisesArray(updateExercises)
  }
  function showExerciseForm(){
    setShowForm(!showForm)
  }

  return (
    <main>
      <div className='uidiv'>
      {showForm ? <NewExerciseForm 
      handleAddExercise={handleAddExercise} 
      showForm={showForm} 
      setShowForm={setShowForm}  /> : <button className='showformbtn' onClick={showExerciseForm}>Add Exercise Form</button>}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterBy={filterBy} setFilterBy={setFilterBy} />
      <ExerciseList exercisesArray={filteredExercises} handleDeleteExercise={handleDeleteExercise} handleFavorites={handleFavorites} />
      </div>
    </main>
  )
}

export default ExercisesPage
