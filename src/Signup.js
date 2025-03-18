import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    if (existingUsers.some((user) => user.email === email)) {
      setError("User already exists! Please login.");
      return;
    }

    // Save new user
    const newUser = { email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Redirect to Login
    navigate("/");
  };

  return (
    <div className="body">
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
    </div>
  );
};

export default Signup;