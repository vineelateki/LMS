const db = require('../db');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const { email, password } = req.body;

    // Query the database to check if admin exists
    const sql = 'SELECT * FROM admins WHERE email = ? AND password = ?';

    db.query(sql, [email, password], (err, result) => {
        if (err) return res.status(500).send(err);

        if (result.length > 0) {
            const token = jwt.sign({ role: "admin", email }, "secret", { expiresIn: "1h" });
            return res.json({ token, role: "admin" });
        } else {
            return res.status(401).json({ error: "Invalid credentials" });
        }
    });
};

// Add Course
exports.addCourse = (req, res) => {
    const { course } = req.body;
    const sql = 'INSERT INTO courses (name) VALUES (?)';

    db.query(sql, [course], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Course added successfully' });
    });
};

// Add Quiz
exports.addQuiz = (req, res) => {
    const { quiz } = req.body;
    const sql = 'INSERT INTO quizzes (title) VALUES (?)';

    db.query(sql, [quiz], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Quiz added successfully' });
    });
};

// Add Assignment
exports.addAssignment = (req, res) => {
    const { assignment } = req.body;
    const sql = 'INSERT INTO assignments (title) VALUES (?)';

    db.query(sql, [assignment], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Assignment added successfully' });
    });
};