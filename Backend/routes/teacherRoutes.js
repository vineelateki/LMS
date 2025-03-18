const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// 📌 Teacher Routes
router.get('/students', teacherController.getStudents);
router.post('/mark-attendance', teacherController.markAttendance);
router.post('/update-syllabus', teacherController.updateSyllabus);
router.get('/courses', teacherController.getCourses);


module.exports = router;