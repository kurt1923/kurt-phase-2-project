import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {


    return (
        <nav className="navigationWrapper">
            <ul className="navigation">
            <li className="navli"><NavLink className="nav" to="/Home">Home</NavLink></li>
            <li className="navli"><NavLink className="nav" to="/ExercisesPage">Exercises</NavLink></li>
            <li className="navli"><NavLink className="nav" to="/Favorites">Favorites</NavLink></li>
            <li className="navli"><NavLink className="nav" to="/ExercisesPage">Videos</NavLink></li>
            <li className="navli"><NavLink className="nav" to="/ExercisesPage">Splits</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;