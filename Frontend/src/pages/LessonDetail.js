import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./LessonDetail.css"; // ✅ Import CSS

const lessons = [{
        id: 1,
        title: "Introduction to React",
        content: "React is a JavaScript library for building user interfaces.",
        video: "https://www.youtube.com/embed/N3AkSS5hXMA" // ✅ React Introduction Video
    },
    {
        id: 2,
        title: "JavaScript Basics",
        content: "JavaScript is a programming language used to create dynamic content on websites.",
        video: "https://www.youtube.com/embed/W6NZfCO5SIk" // ✅ JavaScript Basics Video
    },
    {
        id: 3,
        title: "Understanding APIs",
        content: "APIs allow different software applications to communicate with each other.",
        video: "https://www.youtube.com/embed/GZvSYJDk-us" // ✅ API Basics Video
    },
];

const LessonDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const lesson = lessons.find((lesson) => lesson.id === Number(id));

    if (!lesson) {
        return <h2 className = "error-message" > Lesson not found! < /h2>;
    }

    return ( <
        div className = "detail" >
        <
        div className = "lesson-detail-container" >
        <
        h2 className = "lesson-detail-title my-3" > { lesson.title } < /h2> <
        p className = "lesson-detail-content" > { lesson.content } < /p>

        { /* ✅ Embedded YouTube Video */ } <
        div className = "lesson-video" >
        <
        iframe src = { lesson.video }
        title = { lesson.title }
        frameBorder = "0"
        allowFullScreen className = "lesson-video-frame" >
        < /iframe> <
        /div>

        { /* ✅ Go Back Button */ } <
        button className = "go-back-button"
        onClick = {
            () => navigate("/lessons") } >
        Go Back <
        /button> <
        /div> <
        /div>
    );
};

export default LessonDetail;