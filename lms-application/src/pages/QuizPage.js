import React from "react";
import { Routes, Route } from "react-router-dom";
import QuizList from "../components/QuizList/QuizList";
import QuizDetail from "../components/QuizDetail/QuizDetail";

const QuizPage = () => {
  return (
    <Routes>
      <Route path="/" element={<QuizList />} />
      <Route path="/:id" element={<QuizDetail />} />
    </Routes>
  );
};

export default QuizPage;