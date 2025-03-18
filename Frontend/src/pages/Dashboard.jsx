// pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h2>Select a Role to Login</h2>
            <ul>
                <li><Link to="/admin-login">Admin</Link></li>
                <li><Link to="/student-login">Student</Link></li>
                <li><Link to="/teacher-login">Teacher</Link></li>
            </ul>
        </div>
    );
}

export default Dashboard;
