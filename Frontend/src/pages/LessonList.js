import React from "react";
import { Link } from "react-router-dom";
import "./LessonList.css"; // ✅ Import CSS

const lessons = [
    { id: 1, title: "Introduction to React" },
    { id: 2, title: "JavaScript Basics" },
    { id: 3, title: "Understanding APIs" },
];

const LessonList = () => {
    return ( <
        div className = "body-5" >
        <
        div className = "lesson-list-container" >
        <
        h2 className = "lesson-title" > Lessons < /h2> <
        ul className = "lesson-list" > {
            lessons.map((lesson) => ( <
                li key = { lesson.id }
                className = "lesson-item" >
                <
                Link to = { `/lessons/${lesson.id}` }
                className = "lesson-link" > { lesson.title } <
                /Link> < /
                li >
            ))
        } <
        /ul> <
        Link to = "/add-lesson"
        className = "add-lesson-button" >
        Add Lesson <
        /Link> < /
        div > <
        /div>
    );
};

export default LessonList;