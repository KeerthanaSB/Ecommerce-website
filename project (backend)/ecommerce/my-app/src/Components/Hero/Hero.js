import React from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import bands3 from '../../Components/Assets/bands3.jpg';
// import bands4 from '../../Components/Assets/bands4.jpg';
// import brands from '../../Components/Assets/brands.jpg';
// import brands2 from '../../Components/Assets/brands2.jpg';
import AboutUs from '../AboutUs/AboutUs';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Shop from '../Shop/Shop';
import './Hero.css';

function Hero() {
    return (
        <div className="hero-container">
            <Carousel className="carousel">
                <Carousel.Item>
                    <img src='Assets/brands.jpg' alt="Women Collection" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Assets/brands2.jpg' alt="Men Collection" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Assets/bands3.jpg' alt="Men Collection" className="d-block w-100" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Assets/bands4.jpg' alt="Men Collection" className="d-block w-100" />
                </Carousel.Item>
            </Carousel>
            <AboutUs />
            <Shop />
            <Feedback />
            <Footer />
        </div>
    );
}

export default Hero;
