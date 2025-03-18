import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddLesson.css"; // ✅ Import CSS

const AddLesson = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [lessons, setLessons] = useState([]); // ✅ Store added lessons
    const navigate = useNavigate(); // ✅ Navigation hook

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ Add new lesson to the list
        const newLesson = { title, content };
        setLessons([...lessons, newLesson]);

        // ✅ Clear input fields after adding
        setTitle("");
        setContent("");
    };

    return ( <
        div className = "add-lesson-container" >
        <
        h2 className = "add-lesson-title" > Add New Lesson < /h2> <
        form onSubmit = { handleSubmit }
        className = "add-lesson-form" >
        <
        input type = "text"
        placeholder = "Lesson Title"
        value = { title }
        onChange = {
            (e) => setTitle(e.target.value) }
        className = "lesson-input"
        required /
        >
        <
        textarea placeholder = "Lesson Content"
        value = { content }
        onChange = {
            (e) => setContent(e.target.value) }
        className = "lesson-textarea"
        required /
        >
        <
        button type = "submit"
        className = "lesson-submit-button" >
        Add Lesson <
        /button> <
        /form>

        { /* ✅ Display added lessons below the form */ } <
        div className = "lesson-display" >
        <
        h3 > Lessons Added < /h3> {
            lessons.length === 0 ? ( <
                p > No lessons added yet. < /p>
            ) : ( <
                ul > {
                    lessons.map((lesson, index) => ( <
                        li key = { index }
                        className = "lesson-item" >
                        <
                        h4 > { lesson.title } < /h4> <
                        p > { lesson.content } < /p> <
                        /li>
                    ))
                } <
                /ul>
            )
        } <
        /div>

        { /* ✅ Go Back Button */ } <
        button className = "go-back-button"
        onClick = {
            () => navigate("/lessons") } >
        Go Back <
        /button> <
        /div>
    );
};

export default AddLesson;