import React from 'react'
import image1 from "./darkarm.png"
import image2 from "./lightarm.jpg"

function ExerciseCard({ exercise, onDeleteExercise }) {

    const { image, name, bodypart, id, isFavorited } = exercise
    
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
            <div className="favorites">
                {isFavorited ? (
                    <button className='emoji-button-favorite-active'><img src={image2}/></button>
                ) : (
                    <button className='emoji-button-favorite'><img src={image1}/></button>
                )}
            </div>
        </li>
    );
}

export default ExerciseCard