// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './assets/Components/Header.jsx';         // Header is assumed to be in the comp folder
import Home from './assets/Pages/Home';               // Home page component
import SignUp from './assets/Pages/SignUp';           // SignUp page component
import Workout from './assets/Pages/Workout';         // Existing Workout page component (contains Dropdown)
import LiveCamera from './assets/Components/LiveCamera';
import ExerciseDetail from './assets/Pages/ExerciseDetail'; // <-- Import it here
import { useParams } from "react-router-dom";


import './App.css';
function LiveCameraWrapper() {
  const { exercise } = useParams();
  return <LiveCamera exercise={exercise} />;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-workout" element={<Workout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/exercise/:exercise" element={<LiveCameraWrapper />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
