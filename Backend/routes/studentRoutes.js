const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController.jsx');

// 📌 Student Routes
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.get('/courses', studentController.getAllCourses);
router.get('/assignments', studentController.getAllAssignments);
router.get('/quizzes', studentController.getAllQuizzes);
router.get('/notifications', studentController.getNotifications);
router.get('/attendance', studentController.getAttendance);

module.exports = router;