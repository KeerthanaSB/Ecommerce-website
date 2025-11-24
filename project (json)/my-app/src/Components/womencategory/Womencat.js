
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Womencat.css'; // Import CSS file for Header component
import img1 from '../Assets/women1.jpg'; // Example image imports
import img2 from '../Assets/women2.jpg';
import img3 from '../Assets/women3.jpg';
import img4 from '../Assets/woshop.jpg';
import img5 from '../Assets/meshop.jpg';
 
const Header = () => {
  return (
    <div>
      <nav className="header-nav">
        <ul>
          <li>
            <NavLink to="/heels" className="nav-link">
              <span className="nav-icon">👠</span>
              <span className="nav-text">Heels</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dresses" className="nav-link">
              <span className="nav-icon">👗</span>
              <span className="nav-text">Dresses</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/fashion" className="nav-link">
              <span className="nav-icon">👚</span>
              <span className="nav-text">Fashion</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/shoes" className="nav-link">
              <span className="nav-icon">👟</span>
              <span className="nav-text">Shoes</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/shorts" className="nav-link">
              <span className="nav-icon">🩳</span>
              <span className="nav-text">Shorts</span>
            </NavLink>
          </li>
        </ul>
      </nav>
 
      <div className="content-section">
        <div className="content-item">
          <img src={img1} alt="Heels" className="content-image" />
          <p className="content-text">
            Explore our stunning collection of heels, perfect for every occasion.
          </p>
          <div className="quote-container">
            <blockquote className="quote">
              "Give a girl the right shoes, and she can conquer the world."
            </blockquote>
            <div className="shop-now">
              <span className="moving-text">Shop Now</span>
              <span className="pickup-line">Find your perfect pair!</span>
            </div>
          </div>
        </div>
        <div className="content-item">
          <img src={img2} alt="Dresses" className="content-image" />
          <p className="content-text">
            Discover the latest trends in dresses, from casual to elegant designs.
          </p>
          <div className="quote-container">
            <blockquote className="quote">
              "A girl should be two things: classy and fabulous."
            </blockquote>
            <div className="shop-now">
              <span className="moving-text">Shop Now</span>
              <span className="pickup-line">Dress to impress!</span>
            </div>
          </div>
        </div>
        <div className="content-item">
          <img src={img3} alt="Fashion" className="content-image" />
          <p className="content-text">
            Stay ahead in the fashion game with our curated fashion picks.
          </p>
          <div className="quote-container">
            <blockquote className="quote">
              "Fashion is about something that comes from within you."
            </blockquote>
            <div className="shop-now">
              <span className="moving-text">Shop Now</span>
              <span className="pickup-line">Discover your style!</span>
            </div>
          </div>
        </div>
        <div className="content-item">
          <img src={img4} alt="Shoes" className="content-image" />
          <p className="content-text">
            Find your perfect pair of shoes for every occasion and style.
          </p>
          <div className="quote-container">
            <blockquote className="quote">
              "Cinderella is proof that a new pair of shoes can change your life."
            </blockquote>
            <div className="shop-now">
              <span className="moving-text">Shop Now</span>
              <span className="pickup-line">Walk the walk!</span>
            </div>
          </div>
        </div>
        <div className="content-item">
          <img src={img5} alt="Shorts" className="content-image" />
          <p className="content-text">
            Browse through our collection of comfortable and stylish shorts.
          </p>
          <div className="quote-container">
            <blockquote className="quote">
              "Life is too short to wear boring clothes."
            </blockquote>
            <div className="shop-now">
              <span className="moving-text">Shop Now</span>
              <span className="pickup-line">Stay cool and stylish!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Header;
 
 