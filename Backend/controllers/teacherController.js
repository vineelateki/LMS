const db = require('../db'); // Ensure you have MySQL connection

// 📌 Get all students (For teacher view)
exports.getStudents = (req, res) => {
    db.query(
        "SELECT students.email, students.course_id, courses.name AS topic_name FROM students LEFT JOIN courses ON students.course_id = courses.id",
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        }
    );
};

// 📌 Mark attendance for a student
exports.markAttendance = (req, res) => {
    const { email, status } = req.body;
    if (!email || !status) return res.status(400).json({ error: "Student email and status are required" });

    db.query("INSERT INTO attendance (student_id, date, status) VALUES ((SELECT id FROM students WHERE email = ?), CURDATE(), ?)", [email, status], (err) => {
        if (err) return res.status(500).json({ error: err.message });

        // Get updated attendance count
        db.query(
            "SELECT COUNT(*) AS attendance FROM attendance WHERE student_id = (SELECT id FROM students WHERE email = ?) AND status = 'present'", [email],
            (err, results) => {
                if (err) return res.status(500).json({ error: err.message });
                res.json({ attendance: results[0].attendance });
            }
        );
    });
};

// 📌 Update syllabus completion
exports.updateSyllabus = (req, res) => {
    const { id, completionDate } = req.body;
    if (!id || !completionDate) return res.status(400).json({ error: "Course ID and completion date required" });

    db.query("UPDATE courses SET expected_days = ? WHERE id = ?", [completionDate, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Syllabus updated successfully" });
    });
};

// 📌 Get all courses
exports.getCourses = (req, res) => {
    db.query('SELECT name, expected_days FROM courses', (err, results) => {
        if (err) {
            console.error('Error fetching courses:', err);
            return res.status(500).json({ error: 'Failed to fetch courses' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "No courses available." });
        }
        res.json(results);
    });
};