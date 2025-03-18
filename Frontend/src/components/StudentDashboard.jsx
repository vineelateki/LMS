import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/StudentDashboard.css';

const StudentDashboard = () => {
    const [student, setStudent] = useState(null);
    const [courses, setCourses] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [attendance, setAttendance] = useState(0);

    const token = localStorage.getItem("token");
    const studentId = localStorage.getItem("studentId");

    const headers = { Authorization: `Bearer ${token}` };

    useEffect(() => {
        if (!token) {
            alert("Unauthorized Access");
            window.location.href = "/login";
            return;
        }

        // ✅ Fetch student details
        axios.get(`http://localhost:5000/api/student/students/${studentId}`, { headers })
            .then(res => setStudent(res.data))
            .catch(err => console.error(err));

        // ✅ Fetch attendance
        axios.get(`http://localhost:5000/api/student/attendance?studentId=${studentId}`, { headers })
            .then(res => setAttendance(res.data.attendance))
            .catch(err => console.error(err));

        // ✅ Fetch courses
        axios.get("http://localhost:5000/api/student/courses", { headers })
            .then(res => setCourses(res.data))
            .catch(err => console.error(err));

        // ✅ Fetch assignments
        axios.get("http://localhost:5000/api/student/assignments", { headers })
            .then(res => setAssignments(res.data))
            .catch(err => console.error(err));

        // ✅ Fetch quizzes
        axios.get("http://localhost:5000/api/student/quizzes", { headers })
            .then(res => setQuizzes(res.data))
            .catch(err => console.error(err));

        // ✅ Fetch notifications
        axios.get("http://localhost:5000/api/student/notifications", { headers })
            .then(res => setNotifications(res.data))
            .catch(err => console.error(err));
    }, [studentId, token]);

    return (
        <div className="dashboard">
            {/* ✅ Welcome Section */}
            <div className="section welcome">
                <h1>Welcome, {student?.name || "Student"}!</h1>
            </div>

            {/* ✅ Attendance Section */}
            <div className="section">
                <h2>Attendance</h2>
                <p>{attendance} days</p>
            </div>

            {/* ✅ Course Details Section */}
            <div className="section">
    <h2>Course Details</h2>
    {courses.length > 0 ? (
        <ul>
            {courses.map(course => (
                <li key={course.id}>
                    {course.name} ({course.expected_days !== "Not Set" ? `${course.expected_days} days expected` : "No expected duration"})
                </li>
            ))}
        </ul>
    ) : (
        <p>No courses available</p>
    )}
</div>
            {/* ✅ Assignments Section */}
            <div className="section">
                <h2>Assignments</h2>
                <ul>
                    {assignments.map(a => (
                        <li key={a.id}>{a.title}</li>
                    ))}
                </ul>
            </div>

            {/* ✅ Quizzes Section */}
            <div className="section">
                <h2>Quizzes</h2>
                <ul>
                    {quizzes.map(q => (
                        <li key={q.id}>{q.title}</li>
                    ))}
                </ul>
            </div>

            {/* ✅ Notifications Section */}
            <div className="section">
                <h2>Notifications</h2>
                <ul>
                    {notifications.map(n => (
                        <li key={n.id}>{n.message}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StudentDashboard;
