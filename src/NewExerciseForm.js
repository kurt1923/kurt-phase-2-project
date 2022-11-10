import React, { useState } from 'react'

function NewExerciseForm({ handleAddExercise, setShowForm, showForm }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [bodyPart, setBodyPart] = useState("")


  function handleSubmit(e) {
    const formData = { name, image, bodyPart}
    e.preventDefault()
    fetch("http://localhost:3000/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newExercise) => {
        handleAddExercise(newExercise)
        setName("")
        setImage("")
        setBodyPart("")
      })
  }

  return (
    <div className="new-exercises-form" >
      <h2>New Exercise</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Exercise name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="body part"
          placeholder="Body Part"
          value={bodyPart}
          onChange={(e) => setBodyPart(e.target.value)}
        />
        <button className='form' type="submit">Add Exercise</button>
        <button className='form' type="hide" onClick={(e)=>setShowForm(!showForm)}>Hide</button>
      </form>
    </div>
  );
}

export default NewExerciseForm