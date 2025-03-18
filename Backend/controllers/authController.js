const db = require('../db');
const jwt = require('jsonwebtoken');
exports.register = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    // Check if email already exists in the students table
    const checkSql = `SELECT * FROM students WHERE email = ?`;
    db.query(checkSql, [email], (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: "Database error", details: err });
        }

        if (result.length > 0) {
            return res.status(400).json({ error: "Email already registered" });
        }

        // Insert new student
        const insertSql = `INSERT INTO students (email, password) VALUES (?, ?)`;
        db.query(insertSql, [email, password], (err, result) => {
            if (err) {
                console.error("Database Insert Error:", err);
                return res.status(500).json({ error: "Registration failed", details: err });
            }

            return res.status(201).json({ message: "Registration successful!" });
        });
    });
};

exports.login = (req, res) => {
    const { email, password, role } = req.body;
    console.log(`Login Attempt: Email - ${email}, Role - ${role}`);

    let table = "";
    if (role === "admin") table = "admins";
    else if (role === "teacher") table = "teachers";
    else if (role === "student") table = "students";
    else return res.status(400).json({ error: "Invalid role selected" });

    const sql = `SELECT * FROM ${table} WHERE email = ? AND password = ?`;
    console.log(`Executing Query: ${sql}`);

    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: "Database error", details: err });
        }

        console.log("Query Result:", result);

        if (result.length > 0) {
            const token = jwt.sign({ role: role, email }, "secret", { expiresIn: "1h" });
            console.log("Login Successful");
            return res.json({ token, role });
        } else {
            console.log("Invalid Credentials");
            return res.status(401).json({ error: "Invalid credentials" });
        }
    });
};