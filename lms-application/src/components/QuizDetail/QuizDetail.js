import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./QuizDetail.css";

const QuizDetail = () => {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams(); // Suppress the warning for now
  const navigate = useNavigate();

  // Fetch quiz data based on the ID (you can replace this with an API call)
  const quiz = {
    id: 1,
    title: "React Basics",
    questions: ["What is React?", "What are props?", "What is state?"],
  };

  return (
    <div className="quiz-detail-container">
      <h2>{quiz.title}</h2>
      <div className="quiz-questions">
        {quiz.questions.map((question, index) => (
          <div key={index} className="question-card">
            <p>{index + 1}. {question}</p>
          </div>
        ))}
      </div>
      <button className="go-back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default QuizDetail;