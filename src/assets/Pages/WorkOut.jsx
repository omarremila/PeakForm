// Workout.jsx
import React from 'react';
import Dropdown from './DropDown';
import { useNavigate } from 'react-router-dom';

const Workout = () => {
  const navigate = useNavigate();

  // This function will be called when a workout is selected
  const handleSelectWorkout = (selectedWorkout) => {
    // Navigate to a new page (for example: /workout/Squat)
    navigate(`/exercise/${selectedWorkout}`);
  };

  return (

    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ color: "rgba(43,182,229,255)" }}>Choose Your Workout</h2>

      <Dropdown 
        items={["Squat", "BicepCurl", "Pushups", "Lunges", "ShoulderPress", "Deadlift", "Bench Press"]} 
        onSelect={handleSelectWorkout}
      />
    </div>
  );
};

export default Workout;
