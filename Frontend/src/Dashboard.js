import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    return ( <
        div className = "dashboard-container" >
        <
        h2 className = "text-2xl font-bold" > Dashboard < /h2> <
        p > Welcome!Here you can access all your courses, quizzes, and discussion forums. < /p>

        { /* Courses Section */ } <
        div className = "dashboard-section" >
        <
        h3 > Courses < /h3> <
        p > Explore and manage your courses. < /p> <
        Link to = "/courses" >
        <
        button className = "dashboard-button" > Go to Courses < /button> <
        /Link> <
        /div>

        { /* Quizzes Section */ } <
        div className = "dashboard-section" >
        <
        h3 > Quizzes < /h3> <
        p > Test your knowledge with quizzes. < /p> <
        Link to = "/quiz" >
        <
        button className = "dashboard-button" > Go to Quizzes < /button> <
        /Link> <
        /div>

        { /* Forum Section */ } <
        div className = "dashboard-section" >
        <
        h3 > Forum < /h3> <
        p > Join discussions and interact with other learners. < /p> <
        Link to = "/forum" >
        <
        button className = "dashboard-button" > Go to Forum < /button> <
        /Link> <
        /div> <
        /div>
    );
};

export default Dashboard;