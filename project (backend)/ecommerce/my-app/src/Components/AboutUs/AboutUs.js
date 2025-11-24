import React from 'react';
 
import './AboutUs.css'; // Import CSS from AboutUs component


// import NewContentImg from '../../Components/Assets/imggg.jpg'; // New content image
// import womenImage from '../Assets/flowers.png'; // Women image
// import menImage from '../Assets/flowers.png'; // Men image

 // Import Carwom component if needed

const WomenCategoryAboutUs = () => {
    return (
        <div className="combined-component">
            {/* About Us Section */}
            <section className="about-us-section">
                <div className="about-us-container">
                    <div className="about-us-image left-image">
                        <img src='/Assets/flowers.png' alt="Women Image" />
                    </div>
                    <div className="about-us-content">
                        <h2>About Us</h2>
                        <p>Welcome to Paradise, your ultimate destination for the latest in women's and men's fashion. We offer a curated selection of high-quality clothing designed to elevate your style.</p>
                        <p>At Paradise, we are committed to delivering exceptional customer service and ensuring a seamless shopping experience. Our mission is to inspire confidence through fashion and provide you with trendy and timeless pieces.</p>
                    </div>
                    <div className="about-us-image right-image">
                        <img src='/Assets/flowers.png' alt="Men Image" />
                    </div>
                </div>
            </section>

            {/* Women's Clothing Category Section */}
            <div className="women-category">
                <div className="row aa">
                    <div className="column image-container">
                        <img src='/Assets/imggg.jpg' alt="New Collection" />
                    </div>
                    <div className="column content-side" style={{ backgroundColor: '#f0f0f0' }}>
                        <h2>Women's Clothing Category</h2>
                        <p>Welcome to our Women's Clothing category, where style meets comfort and elegance.</p>
                        <div className="text-content">
                            <h3>About Women's Clothing</h3>
                            <p>Explore our curated collections that bring you the latest trends straight from the runway. From luxurious fabrics to everyday essentials, our clothing is crafted with the utmost care and attention to detail.</p>
                            <h3>Why Choose Us?</h3>
                            <p>Our team is dedicated to providing you with a seamless shopping experience and personalized assistance. Enjoy hassle-free delivery right to your doorstep, ensuring you receive your order promptly.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default WomenCategoryAboutUs;
