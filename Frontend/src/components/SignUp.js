import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async() => {
        await axios.post('http://localhost:5000/api/students/signup', { name, email, password });
        alert('Signup successful');
    };

    return ( <
        div >
        <
        h2 > Student Signup < /h2> <
        input type = "text"
        placeholder = "Name"
        onChange = {
            (e) => setName(e.target.value) }
        /> <
        input type = "email"
        placeholder = "Email"
        onChange = {
            (e) => setEmail(e.target.value) }
        /> <
        input type = "password"
        placeholder = "Password"
        onChange = {
            (e) => setPassword(e.target.value) }
        /> <
        button onClick = { handleSignup } > Signup < /button> <
        /div>
    );
};

export default SignUp;