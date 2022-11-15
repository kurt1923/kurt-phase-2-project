import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import ExercisesPage from "./ExercisesPage";
import Home from "./Home";
import NavBar from "./NavBar"
import Favorites from "./Favorites";
import Splits from "./Splits";
import Videos from "./Videos";

function App() {

  const [exercisesArray, setExercisesArray] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/exercises")
      .then((r) => r.json())
      .then(exercisesArray => {
        setExercisesArray(exercisesArray)
      })
  }, []);

  return (
    <div className="app">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ExercisesPage" element={<ExercisesPage exercisesArray={exercisesArray} setExercisesArray={setExercisesArray} />} />
        <Route path="/Favorites" element={<Favorites exercisesArray={exercisesArray} />} />
        <Route path="/Videos" element={<Videos/>} />
        <Route path="/Splits" element={<Splits/>} />
      </Routes>
    </div>
  );
}

export default App;
