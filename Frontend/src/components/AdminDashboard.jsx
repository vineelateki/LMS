import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [course, setCourse] = useState('');
  const [quiz, setQuiz] = useState('');
  const [assignment, setAssignment] = useState('');

  const addCourse = async () => {
    await axios.post('http://localhost:5000/api/admin/add-course', { course });
    alert('Course added successfully');
  };

  const addQuiz = async () => {
    await axios.post('http://localhost:5000/api/admin/add-quiz', { quiz });
    alert('Quiz added successfully');
  };

  const addAssignment = async () => {
    await axios.post('http://localhost:5000/api/admin/add-assignment', { assignment });
    alert('Assignment added successfully');
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div className="section">
        <h3>Add Course</h3>
        <input type="text" placeholder="Course Name" onChange={(e) => setCourse(e.target.value)} />
        <button onClick={addCourse}>Add</button>
      </div>

      <div className="section">
        <h3>Add Quiz</h3>
        <input type="text" placeholder="Quiz Title" onChange={(e) => setQuiz(e.target.value)} />
        <button onClick={addQuiz}>Add</button>
      </div>

      <div className="section">
        <h3>Add Assignment</h3>
        <input type="text" placeholder="Assignment Title" onChange={(e) => setAssignment(e.target.value)} />
        <button onClick={addAssignment}>Add</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
