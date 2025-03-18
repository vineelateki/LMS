import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/TeacherDashboard.css';

const TeacherDashboard = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch students
        const studentsRes = await axios.get('http://localhost:5000/api/teacher/students');
        setStudents(studentsRes.data);

        // Fetch courses
        const coursesRes = await axios.get('http://localhost:5000/api/teacher/courses');
        setCourses(coursesRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const markAttendance = async (email) => {
    if (!attendance[email]) {
      alert("Please select attendance before marking!");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/teacher/mark-attendance', {
        email,
        status: attendance[email], 
      });

      // Update student's attendance after marking
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.email === email ? { ...student, attendance: res.data.attendance } : student
        )
      );
    } catch (error) {
      console.error('Error updating attendance:', error);
    }
  };

  return (
    <div className="teacher-dashboard">
      <h2>Teacher Dashboard</h2>

      <div className="dashboard-container">
        {/* Course Details Section */}
        <div className="course-container">
          <h3>Course Details</h3>
          {courses.length === 0 ? (
            <p>No courses available.</p>
          ) : (
            courses.map((course) => (
              <div key={course.name} className="course-card">
                <p><strong>Course Name:</strong> {course.name}</p>
                <p><strong>Expected Completion:</strong> {course.expected_days} days</p>
              </div>
            ))
          )}
        </div>

        {/* Attendance Section */}
        <div className="attendance-container">
          <h3>Student Attendance</h3>
          {students.length === 0 ? (
            <p>No students found.</p>
          ) : (
            students.map((student) => (
              <div key={student.email} className="attendance-card">
                <p><strong>Email:</strong> {student.email}</p>
                
                <select
                  onChange={(e) => setAttendance({ ...attendance, [student.email]: e.target.value })}
                >
                  <option value="">Select</option>
                  <option value="present">Present</option>
                  <option value="absent">Absent</option>
                </select>

                <button onClick={() => markAttendance(student.email)}>Mark Attendance</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
