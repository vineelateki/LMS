const db = require('../db'); // Ensure you have MySQL connection

// 📌 Get all students
exports.getAllStudents = (req, res) => {
    db.query("SELECT * FROM students", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// 📌 Get a single student by ID
exports.getStudentById = (req, res) => {
    const studentId = req.params.id;
    db.query("SELECT * FROM students WHERE id = ?", [studentId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "Student not found" });
        res.json(results[0]);
    });
};

// 📌 Get all courses
exports.getAllCourses = (req, res) => {
    db.query("SELECT * FROM courses", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// 📌 Get all assignments
exports.getAllAssignments = (req, res) => {
    db.query("SELECT * FROM assignments", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// 📌 Get all quizzes
exports.getAllQuizzes = (req, res) => {
    db.query("SELECT * FROM quizzes", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// 📌 Get all notifications for a student
exports.getNotifications = (req, res) => {
    const studentId = req.query.studentId;
    db.query("SELECT * FROM notifications WHERE student_id = ?", [studentId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// 📌 Get attendance for a student
exports.getAttendance = (req, res) => {
    const studentId = req.query.studentId;
    db.query("SELECT COUNT(*) AS attendance FROM attendance WHERE student_id = ? AND status = 'present'", 
        [studentId], 
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ attendance: results[0].attendance });
        }
    );
};
