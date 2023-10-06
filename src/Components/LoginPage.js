// src/LoginPage.js
import React, { useState } from 'react';
import "./file.css";
import { useAlert } from "react-alert";
import { useNavigate, Link } from "react-router-dom";
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let navigate = useNavigate();
  const alert = useAlert()
  const handleLogin = () => {
    // Simulate an API request (replace with actual API request)
    if (username === 'admin' && password === 'admin') {
      // Successful login logic (e.g., navigate to the dashboard page)
      navigate('./dashboard');
    } else {
      // Handle specific error cases
      if (username !== 'admin') {
       alert.error("invalid username")
      } else if (password !== 'admin') {
        alert.error("invalid password")
      } else {
        alert.error("invalid credentials")
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
