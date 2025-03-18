import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import '../styles/Home.css'; // Import the CSS
import logo from '../assets/logo.png';



const Home = () => {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <div className="home-container">
            <h1>LearnIn</h1>
           
            
            <div className="auth-switch">
                <button onClick={() => setIsRegister(false)}>Login</button>
                <button onClick={() => setIsRegister(true)}>Register</button>
            </div>

            {isRegister ? <Register /> : <Login />}
        </div>
    );
};

export default Home;
