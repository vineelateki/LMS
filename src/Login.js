import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid credentials! Please check your email and password.");
    }
  };

  return (
    <div className="body-2">
    <div className="login-container">
      <h2 className="text-white">Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p className="text-white">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
    </div>
  );
};

export default Login;
