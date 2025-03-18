import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"; // Import styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Quiz App</h1>
      <Link to="/quiz" className="start-quiz-button">
        Start Quiz
      </Link>
    </div>
  );
};

export default Dashboard;