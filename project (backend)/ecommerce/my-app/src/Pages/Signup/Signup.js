import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import singupimg from '../../Components/Assets/singup.jpg';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!username.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all the fields.');
      setShowErrorPopup(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/insertreg', {
        username,
        email,
        password,
      });

      if (response.data.success) {
        setUsername('');
        setEmail('');
        setPassword('');
        setError('');
        setShowSuccessPopup(true);

        // Delay navigation after 5 seconds
        setTimeout(() => {
          navigate('/');
        }, 5000);
      } else {
        setError(response.data.message || 'Signup failed. Please try again.');
        setShowErrorPopup(true);
      }
    } catch (error) {
      console.error('Signup Error:', error.response ? error.response.data : error.message);
      setError('Signup failed. Please try again.');
      setShowErrorPopup(true);
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    navigate('/');
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
  };

  const handleOkButtonClick = () => {
    closeSuccessPopup(); // Redirect to home page after successful signup
  };

  const handleCloseButtonClick = () => {
    closeErrorPopup(); // Return to signup page after failed signup
  };

  return (
    <div className="signup-container">
      <div className="split-screen">
        <div className="left">
          <img src='/Assets/singup.jpg'alt="Signup" className="signup-image" />
        </div>
        <div className="right">
          <h1>Signup</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSignup}>
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
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <button type="submit">Signup</button>
          </form>
          <p>
            Already have an account? <Link to="/Loginn">Login here</Link>
          </p>
        </div>
      </div>

      {showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup-content success-popup">
            <h2>Signup Successful!</h2>
            <p>You have successfully signed up.</p>
            <div className="popup-buttons">
              <button onClick={handleOkButtonClick}>OK</button>
            </div>
          </div>
        </div>
      )}

      {showErrorPopup && (
        <div className="popup-overlay">
          <div className="popup-content error-popup">
            <h2>Signup Failed!</h2>
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

export default Signup;
