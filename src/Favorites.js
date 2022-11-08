import React from "react";
import FavoritesList from "./FavoritesList"

function Favorites({ exercisesArray }) {

    const favoritesToDisplay = exercisesArray.filter((e) =>
        e.isFavorited === true)

    return (
        <div>
            <FavoritesList exercisesArray={favoritesToDisplay} />
        </div>
    )
}

export default Favorites