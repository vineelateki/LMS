import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forum from "./forum";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Forum />} />
      </Routes>
    </Router>
  );
}

export default App;
