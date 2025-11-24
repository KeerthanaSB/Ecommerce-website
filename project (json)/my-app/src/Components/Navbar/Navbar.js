import React, { useRef, useState } from 'react';
import { FaBars, FaHeart, FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { useAuth } from '../../Pages/AuthProvider';
import './Navbar.css';

function Navbar() {
  const navRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const { isLoggedIn, logout } = useAuth(); // Access isLoggedIn and logout function from AuthContext

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const showNavbar = () => {
    document.body.classList.toggle('nav-open');
    navRef.current.classList.toggle('open');
  };

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    console.log('Logging out');
    // Additional logic such as navigating to login page after logout can be added here
  };

  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>

      <nav ref={navRef} className="nav-menu">
        <div className="nav-links">
          <Link to="/" onClick={showNavbar}>Home</Link>
          <Link to="/AboutUs" onClick={showNavbar}>About</Link>
          <Link to="/Shop" onClick={showNavbar}>Shop</Link>
          <Link to="/Feedback" onClick={showNavbar}>Contact</Link>
        </div>
        <div className="nav-icons">
          <FaHeart className="nav-icon" />
          <FaShoppingCart className="nav-icon" />
          <div className="icon" onClick={toggleDropdown}>
            <FaUser className="nav-icon" />
            {isLoggedIn ? (
              <div className="dropdown-content">
                <button onClick={handleLogout} className='logoutbutton'>Logout</button>
              </div>
            ) : (
              <div className="dropdown-content">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </div>
            )}
          </div>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
