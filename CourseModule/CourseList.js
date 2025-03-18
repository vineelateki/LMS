import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CourseList.css";

const courses = [
  {
    id: 1,
    title: "Full Stack Java",
    startDate: "21 Aug 2024",
    instructor: "Mr. Hari Krishna",
    duration: "6 months",
    image: "/images/fullstack.png",
  },
  {
    id: 2,
    title: "Core Java",
    startDate: "22 Aug 2024",
    instructor: "Mr. Daniel",
    duration: "4 months",
    image: "/images/core-java.png",
  },
  {
    id: 3,
    title: "Data Science & AI",
    startDate: "10 Sep 2024",
    instructor: "Ms. Sharma L",
    duration: "5 months",
    image: "/images/datascience.png",
  },
  {
    id: 4,
    title: "DevOps with AWS",
    startDate: "15 Oct 2024",
    instructor: "Mr. Krishna",
    duration: "4 months",
    image: "/images/devops.png",
  },
];

const CourseList = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <div className="container mt-4">

      {/* ✅ Title and Go Back Button on the Same Line */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-center flex-grow-1">Available Courses</h2>
        <button className="btn btn-danger go-back-btn" onClick={() => navigate("/dashboard")}>
          Go Back
        </button>
      </div>

      <div className="row justify-content-center">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card shadow-lg" style={{ width: "100%", height: "auto" }}>

              {/* Course Details */}
              <div className="card-body text-center">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text"><strong>Start Date:</strong> {course.startDate}</p>
                <p className="card-text"><strong>Instructor:</strong> {course.instructor}</p>
                <p className="card-text"><strong>Duration:</strong> {course.duration}</p>
              </div>

              {/* Middle Image (Properly Centered) */}
              <img
                src={course.image}
                className="img-fluid mx-auto d-block"
                style={{ height: "150px", objectFit: "contain" }}
                alt={course.title}
              />

              {/* View and Enroll Buttons (No Extra Space) */}
              <div className="card-body">
              <Link to={`/courses/${course.id}`} className="btn btn-primary w-100 mb-2">View</Link>

                <button className="btn btn-success w-100">Enroll</button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;