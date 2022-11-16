import React from 'react'
import { NavLink } from "react-router-dom";
import image1 from "./srcPics/darkarm.png"
import image2 from "./srcPics/lightarm.jpg"

function ExerciseCard({ exercise, onDeleteExercise, handleFavorites, showVid, setShowVid }) {

    const { image, name, bodypart, id, isFavorited, videos } = exercise


    function onClickDelete() {
        fetch(`http://localhost:3000/exercises/${id}`, {
            method: "DELETE",
        })
        onDeleteExercise(id)
    }

    function onClickFavorite() {
        fetch(`http://localhost:3000/exercises/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ isFavorited: !isFavorited })
        })
            .then((r) => r.json())
            .then(handleFavorites)
    }
    function handleClick(){
        setShowVid(videos)
    }
   
    return (
        <li className="card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>Body Part: {bodypart}</p>
            <button className='cardbtn' onClick={handleClick}><NavLink to="/Videos">Videos </NavLink></button>
            <button className='cardbtn' onClick={onClickDelete}>Delete</button>
            <div className="favorites" >
                {isFavorited ? (
                    <button onClick={onClickFavorite} className='emoji-button-favorite-active'><img src={image1} alt={image1} /></button>
                ) : (
                    <button onClick={onClickFavorite} className='emoji-button-favorite'><img src={image2} alt={image2} /></button>
                )}
            </div>
        </li>
    );
}

export default ExerciseCard