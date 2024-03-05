import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddHabit from './components/AddHabit'
import NavBar from './components/NavBar';
import ViewWeekly from './components/ViewWeekly';

function App() {
  return (
    <>
    <NavBar />
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<AddHabit />} />
        <Route path="/view-weekly" element={<ViewWeekly  />} />
      </Routes>
    </div>
  </>
  );
}

export default App;
