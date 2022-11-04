import React from 'react'

function ExerciseCard({ exercise, onDeleteExercise }) {

    const { image, name, bodypart, id } = exercise

    function onClickDelete() {
        fetch(`http://localhost:3000/exercises/${id}`, {
            method: "DELETE",
        })
        onDeleteExercise(id)
    }

    return (
        <li className="card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>Body Part: {bodypart}</p>
            <button className='cardbtn'>Video</button>
            
            <button className='cardbtn' onClick={onClickDelete}>Delete</button>

        </li>
    );
}

export default ExerciseCard