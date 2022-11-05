import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ExercisesPage from "./ExercisesPage";
import Home from "./Home";
import NavBar from "./NavBar"

function App() {
  
  
  
  
  return (
    <div className="app">
      <Header />
      <NavBar  />      
      <Routes>
        <Route path="/Home" element={<Home />} />        
        <Route path= "/ExercisesPage" element={<ExercisesPage />} />        
      </Routes>      
    </div>
  );
}

export default App;
