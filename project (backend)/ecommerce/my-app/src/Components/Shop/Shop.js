import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css'; // Ensure to create Shop.css for styling if needed
// import womenImage from '../Assets/woshop.jpg';
// import menImage from '../Assets/meshop.jpg';
// import jewelryImage from '../Assets/jew.jpg';
// import handbagsImage from '../Assets/hand.jpg';
const Shop = () => {
    return (
        <section className="shop-section">
            <div className="shop-container">
                <div className="shop-intro">
                    <h2>Let's Shop</h2>
                    <p>Discover the latest trends in men's and women's fashion. Shop now and elevate your style!</p>
                    <Link to="/shop/Categories" className="shop-btn">Shop Now</Link> {/* Only one shop button */}
                </div>
                <div className="shop-cards">
                    {/* Card for Men's Collection */}
                    <div className="card">
                        <img src='/Assets/meshop.jpg' alt="Men's Fashion" />
                        <div className="card-content">
                            <h3>Men's Collection</h3>
                            <p>Explore our collection designed for the modern man.</p>
                            <Link to="/Expolermen" className="explore-btn">Explore</Link>
                        </div>
                    </div>
                    
                    {/* Card for Women's Collection */}
                    <div className="card">
                        <img src='/Assets/woshop.jpg' alt="Women's Fashion" />
                        <div className="card-content">
                            <h3>Women's Collection</h3>
                            <p>Discover our curated selection for stylish women.</p>
                            <Link to="/Explorewomen" className="explore-btn">Explore</Link>
                        </div>
                    </div>

                    {/* Card for Jewelry Collection */}
                    <div className="card">
                        <img src='/Assets/jew.jpg' alt="Jewelry" />
                        <div className="card-content">
                            <h3>Jewelry Collection</h3>
                            <p>Explore our exquisite jewelry designs.</p>
                            <Link to="/Jewellery" className="explore-btn">Explore</Link>
                        </div>
                    </div>

                    {/* Card for Handbags Collection */}
                    <div className="card">
                        <img src='/Assets/hand.jpg' alt="Handbags" />
                        <div className="card-content">
                            <h3>Handbags Collection</h3>
                            <p>Discover our latest collection of trendy handbags.</p>
                            <Link to="/Explorebags" className="explore-btn">Explore</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;
