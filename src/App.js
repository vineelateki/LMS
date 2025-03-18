// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
// import Dashboard from './Dashboard'; // Create this component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;