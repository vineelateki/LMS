import React from "react";
import { Link } from "react-router-dom";
import { quizzes } from "../../data/quizzes";
import "./QuizList.css"; // Import styles

const QuizList = () => {
  return (
    <div className="quiz-list-container">
      <h2>Available Quizzes</h2>
      <ul className="quiz-list">
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link to={`/quiz/${quiz.id}`} className="quiz-button">
              {quiz.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;