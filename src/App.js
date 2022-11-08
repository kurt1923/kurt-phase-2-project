import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ExercisesPage from "./ExercisesPage";
import Home from "./Home";
import NavBar from "./NavBar"
import Favorites from "./Favorites";
import Splits from "./Splits";

function App() {
  
  
  
  
  return (
    <div className="app">
      <Header />
      <NavBar  />      
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path= "/ExercisesPage" element={<ExercisesPage />} />  
        <Route path= "/Favorites" element={<Favorites />} />       
      </Routes>      
    </div>
  );
}

export default App;
