import React from 'react'
import { NavLink } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Home() {
  return (
    <div className='homeinfo'>
      <p>
        Welcome to Bro Splits Pro! This app is designed for all those gym rats who
        want instant access to their favorite workout ecercises! Feel free to browse exercises, add to exercise list, add favorites, watch instructional videos, and create your own workout splits.
      </p>
      <br />
      <Splide>
        <SplideSlide>
      <div className="navli">
        <NavLink className="nav" to="/ExercisesPage">
          <div className='exdiv'>
            <br />
            <br />
            Exercises
            <br />
            <br />
          </div>
        </NavLink>
      </div>
      </SplideSlide>
      <SplideSlide>
      <div className="navli">
        <NavLink className="nav" to="/Favorites">
          <div className='exdiv2'>
            <br />
            <br />
            Favorites
            <br />
            <br />
          </div>
        </NavLink>
      </div>
      </SplideSlide>
      <SplideSlide>
      <div className="navli">
        <NavLink className="nav" to="/Favorites">
          <div className='exdiv3'>
            <br />
            <br />
            Videos
            <br />
            <br />
          </div>
        </NavLink>
      </div>
      </SplideSlide>
      <SplideSlide>
      <div className="navli">
        <NavLink className="nav" to="/Splits">
          <div className='exdiv4'>
            <br />
            <br />
            Splits
            <br />
            <br />
          </div>
        </NavLink>
      </div>
      </SplideSlide>
      </Splide>
    </div>




  )
}

export default Home