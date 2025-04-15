// Header.jsx
import React from 'react';
import muscleIcon from './pics/muscle_icon.png'; // Adjust the path if necessary
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
      <h1 className="header-text">PeakForm Coach</h1>

        <img src={muscleIcon} alt="Muscle Icon" className="muscle-icon" />
      </div>
      <nav className="nav nav-right">
        <a href="/">Home</a>
        <a href="/choose-workout">Choose Workout</a>
        <a href="/signup">Sign Up</a>
      </nav>
    </header>
  );
}
