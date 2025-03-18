const express = require("express");
const { getQuizzes, getQuizById } = require("../controllers/quizController");

const router = express.Router();

// GET /api/quizzes - Get all quizzes
router.get("/", getQuizzes);

// GET /api/quizzes/:id - Get a single quiz by ID
router.get("/:id", getQuizById);

module.exports = router;