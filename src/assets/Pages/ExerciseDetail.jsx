// src/pages/ExerciseDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ExerciseDetail = () => {
  // useParams will give you the dynamic segment from the URL
  const { exercise } = useParams();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{exercise} Details</h2>
      <p>Here you can display more information about the {exercise} workout.</p>
    </div>
  );
};

export default ExerciseDetail;
