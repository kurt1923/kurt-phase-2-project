import React, { useState } from 'react'

function Splits() {

  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)


  return (
    <>
      <h1 className='h1-split'>Split Examples</h1>
      <div className='grid-container'>
        <p style={{textIndent:45}}> These are a few split examples for programming your lifts into your workouts. There are 
          pros and cons to each split. The biggest pro to the once a week split is a longer rest periods for 
          recovery. This is important when you are having very strenuous workouts. The push and pull style workouts hit
          body parts more frequently and have higher total volume but have less set volume in workouts. I recommend 
          the upper lower style for novice lifters who are getting used to the exercises. The better you become at them, the 
          more likely a lifter would need extended recovery time between lifts. </p>
        <div className='grid-item1' onClick={(e) => setShow1(!show1)}>

          <h2 className='splits' >Once a Week Split</h2>
          {show1 ? <>
            <p>Day 1- Chest and Triceps</p>
            <li>Chest- 4 exercises, 12-16 sets, 10-15 reps</li>
            <li>Chest- 3 exercises, 9-12 sets, 10-15 reps</li>
            <p>Day 2- Legs</p>
            <li>Quads- 3 exercises, 10-12 sets, 10-15 reps</li>
            <li>Hams- 2 to 3 exercises, 9-12 sets, 10-15 reps</li>
            <p>Day 3- Back and Biceps</p>
            <li>Back- 4 exercises, 12-16 sets, 10-15 reps</li>           
            <li>Biceps- 3 to 4 exercises, 9-12 sets, 10-15 reps</li>
            <p>Day 4- Abs and cardio</p>
            <p>Day 5- Shoulders</p>
            <li>Anterior- 2 exercises, 6 to 8, 10-15 reps</li>
            <li>Lateral- 2 exercises, 6 to 8, 10-15 reps</li>
            <li>Posterior- 2 exercises, 6 to 8, 10-15 reps</li>
            <p>Day 6- optional arms and cavs work</p>
            <p>Day 7-REST!</p></> : null}
        </div>
        <div className='grid-item2' onClick={(e) => setShow2(!show2)}>
          <h2 className='splits'>Push, Pull, Legs</h2>
          {show2 ? <>
            <p>Day 1- Push</p>
            <li>Chest- 3 exercises, 12-16 sets, 10-15 reps</li>
            <li>Shoulders- 3 exercises, 9-12 sets, 10-15 reps</li>
            <li>Triceeps- 3 exercises, 9-12 sets, 10-15 reps</li>
            <p>Day 2- Pull</p>
            <li>Back- 3 exercises, 9-12 sets, 10-15 reps</li>
            <li>Biceps- 2 to 3 exercises, 6-10 sets, 10-15 reps</li>
            <p>Day 3- Legs</p>
            <li>Quads- 3 exercises, 9-12 sets, 10-15 reps</li>
            <li>Hams- 2 exercises, 6-8, 10-15 reps</li>
            <li>Calves- 2 exercise, 4 sets, 10-15 reps</li>
            <p>Day 4- Abs and cardio / REST</p>
            <p>Repeat!</p></> : null}
        </div>
      
      <div className='grid-item3' onClick={(e) => setShow3(!show3)}>
        <h2 className='splits'>Push, Pull, Legs, Arms</h2>
        {show3 ? <>
            <p>Day 1- Push</p>
            <li>Chest- 4 exercises, 12-16 sets, 10-15 reps</li>
            <li>Shoulders- 3 exercises, 9-12 sets, 10-15 reps</li>
            <p>Day 2- Pull</p>
            <li>Back- 4-5 exercises, 12-16 sets, 10-15 reps</li>            
            <p>Day 3- Legs</p>
            <li>Quads- 3 exercises, 9-12 sets, 10-15 reps</li>
            <li>Hams- 2 exercises, 6-8, 10-15 reps</li>
            <p>Day 4- Arms and abs</p>
            <li>Biceps- 3 exercises, 12 sets, 10-15 reps</li>
            <li>Triceps- 3 exercises, 12 sets, 10-15 reps</li>
            <li>Calves- 2 exercise, 6 sets, 10-15 reps</li>
            <p>Day 5- Rest</p>
            <p>Repeat!</p></> : null}
        </div>
      <div className='grid-item4' onClick={(e) => setShow4(!show4)}>
        <h2 className='splits'>Upper, Lower</h2>
        {show4 ? <>
            <p>Day 1- Chest and Triceps</p>
            <li>Chest- 2 exercises, 6 sets, 10-15 reps</li>
            <li>Back- 3 exercises, 9 sets, 10-15 reps</li>
            <li>Biceps- 2 exercises, 6 sets, 10-15 reps</li>
            <li>Triceps- 2 exercises, 6 sets, 10-15 reps</li>
            <p>Shoulders- 2 exercises, 6 sets</p>
            <p>Day 2- Legs</p>
            <li>Quads- 3 exercises, 10-12 sets, 10-15 reps</li>
            <li>Hams- 2 exercises, 8 sets, 10-15 reps</li>
            <li>Calves- 2 exercise, 6 sets, 10-15 reps</li>
            <p>Rest</p>
            <p>Repeat</p></> : null}
        </div>
    </div>
    </>
  )

}

export default Splits