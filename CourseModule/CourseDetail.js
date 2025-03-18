import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CourseDetail.css";

const courses = [
  {
    id: 1,
    title: "Full Stack Java",
    video: "https://www.youtube.com/embed/8cm1x4bC610",
  },
  {
    id: 2,
    title: "Core Java",
    video: "https://www.youtube.com/embed/hBh_CC5y8-s",
  },
  {
    id: 3,
    title: "Data Science & AI",
    video: "https://www.youtube.com/embed/X3paOmcrTjQ",
  },
  {
    id: 4,
    title: "DevOps",
    video: "https://www.youtube.com/embed/XeUp24lH8gU",
  },
];

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.id === Number(id));

  if (!course) {
    return <h2 className="text-red-500 text-center">Course not found!</h2>;
  }

  const handleEnroll = () => {
    alert("Enrolled Successfully!");
  };

  return (
    <div className="course-container">
      <h2 className="course-title my-3">{course.title}</h2>
      <iframe
        src={course.video}
        title={course.title}
        frameBorder="0"
        allowFullScreen
        className="course-video"
      ></iframe>
      <button className="enroll-button btn btn-success my-3" onClick={handleEnroll}>
        Enroll Now
      </button>

      {/* ✅ Styled Go Back Button */}
      <button className="go-back-btn" onClick={() => navigate("/courses")}>
        Go Back to Courses
      </button>
    </div>
  );
};

export default CourseDetail;