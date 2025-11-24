// Loginn.js
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import './Loginn.css';
// import loginimg from '../../Components/Assets/login.jpg';

const Loginn = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/getlogin', {
        username,
        password,
      });

      if (response.data.success) {
        setError('');
        login(); // Call login from AuthProvider to set authenticated state
        setShowSuccessPopup(true);
        setUsername('');
        setPassword('');
      } else {
        setError('Please register before login');
        setShowErrorPopup(true);
      }
    } catch (error) {
      console.error('Login Error:', error.response ? error.response.data : error.message);
      setError('Login failed. Please try again.');
      setShowErrorPopup(true);
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    navigate('/Buynow');
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
  };

  const handleOkButtonClick = () => {
    closeSuccessPopup(); // Redirect to home page after successful login
  };

  const handleCloseButtonClick = () => {
    closeErrorPopup(); // Return to login page after failed login
  };

  return (
    <div className="login-container">
      <div className="split-screen">
        <div className="left">
          <img src='/Assets/login.jpg' alt="Logo" className="login-image" />
        </div>
        <div className="right">
          <h1>Login</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleLogin}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <Link to="/Signup">Sign up here</Link>
          </p>
        </div>
      </div>

      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup-content success-popup">
            <h2>Login Successful!</h2>
            <p>You have successfully logged in.</p>
            <div className="popup-buttons">
              <button onClick={handleOkButtonClick}>OK</button>
            </div>
          </div>
        </div>
      )}

      {showErrorPopup && (
        <div className="popup-overlay">
          <div className="popup-content error-popup">
            <h2>Login Failed!</h2>
            <p>{error}</p>
            <div className="popup-buttons">
              <button onClick={handleCloseButtonClick}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loginn;
