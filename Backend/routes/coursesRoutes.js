const express = require('express');
const authMiddleware = require('../config/authMiddleware.jsx');
const Course = require('../models/Course');
const router = express.Router();

router.get('/', authMiddleware, async(req, res) => {
    const courses = await Course.findAll();
    res.json(courses);
});

router.post('/', authMiddleware, async(req, res) => {
    if (req.user.role !== 'teacher' && req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Only teachers and admins can create courses' });
    }
    const { title, description } = req.body;
    const newCourse = await Course.create({ title, description, teacherId: req.user.id });
    res.status(201).json(newCourse);
});

module.exports = router;