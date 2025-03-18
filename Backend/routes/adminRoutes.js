const express = require('express');
const { login, addCourse, addQuiz, addAssignment } = require('../controllers/adminController');

const router = express.Router();

router.post('/login', login);
router.post('/add-course', addCourse);
router.post('/add-quiz', addQuiz);
router.post('/add-assignment', addAssignment);

module.exports = router;