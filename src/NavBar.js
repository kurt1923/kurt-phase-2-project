import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    
    
    return (
        <nav>
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/ExercisesPage">Exercises</NavLink>
            {/* <a onClick={handleLinkClick} href="/projects">Projects</a> */}
        </nav>
    );
}

export default NavBar;