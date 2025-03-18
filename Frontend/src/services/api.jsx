const express = require('express');
const studentController = require('../controllers/studentController');
const teacherController = require('../controllers/teacherController');
const authController = require('../controllers/authController');

const router = express.Router();

// Authentication Routes
router.post('/login', authController.login);
router.post('/register', authController.register);

// Student Routes
router.get('/student/courses', studentController.getCourses);
router.get('/student/assignments', studentController.getAssignments);
router.get('/student/quizzes', studentController.getQuizzes);
router.get('/student/notifications', studentController.getNotifications);
router.get('/student/attendance', studentController.getAttendance);

// Teacher Routes
router.get('/teacher/students', teacherController.getStudents);
router.post('/teacher/mark-attendance', teacherController.markAttendance);
router.post('/teacher/update-syllabus', teacherController.updateSyllabus);

module.exports = router;
