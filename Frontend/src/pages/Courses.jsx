import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Courses.css';

function Courses() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');  // Redirect to login if no token
            return;
        }

        axios.get('http://localhost:5000/courses', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => setCourses(response.data))
        .catch(error => {
            console.error('Error fetching courses:', error);
            if (error.response && error.response.status === 401) {
                navigate('/login'); // Redirect on unauthorized
            }
        });
    }, [navigate]);

    return (
        <div className="courses-container">
            <h2>Courses</h2>
            <ul className="courses-list">
                {courses.map(course => (
                    <li key={course.id}>{course.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Courses;
