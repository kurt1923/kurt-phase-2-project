import { useState, useEffect } from "react";
import FavoritesList from "./FavoritesList"

function Favorites() {
    const [exercisesArray, setExercisesArray] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/exercises")
            .then((r) => r.json())
            .then(exercisesArray => {
                setExercisesArray(exercisesArray)
            })
    }, []);

  const favoritesToDisplay = exercisesArray.filter((e) => 
  e.isFavorited === true)

    return (
        <div>
            <FavoritesList exercisesArray={favoritesToDisplay} />
        </div>
    )
}

export default Favorites