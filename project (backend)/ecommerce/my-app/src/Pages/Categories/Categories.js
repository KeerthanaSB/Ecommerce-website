import React from 'react';
import './Categories.css';
// import Womcat from '../../Components/Assets/womcat.jpg';
// import Mencat from '../../Components/Assets/mencat.jpg';
// import Jewcat from '../../Components/Assets/jewcatt.jpg';
// import Hancat from '../../Components/Assets/hancat.jpg';

const Categories = () => {
    return (
        <div className="categories-container">
            <h2 className="categories-heading">Categories</h2>
            <a href="/shop/Womencat" className="shop-btn">Let's Shop</a>

            <div className="categories-grid">
                {/* Category Card 1: Women's Clothing */}
                <div className="category-card women">
                    <img src='/Assets/womcat.jpg' alt="Women's Clothing" />
                    <div className="category-content">
                        <h3>Women's Clothing</h3>
                        <p>Discover the latest trends in women's fashion. From dresses to accessories, 
                            find everything you need to elevate your style.
                        </p>
                        {/* <a href="/shop/Womencat" className="shop-btn">Let's Shop</a> */}
                    </div>
                </div>

                {/* Category Card 2: Men's Clothing */}
                <div className="category-card men">
                    <img src='/Assets/mencat.jpg' alt="Men's Clothing" />
                    <div className="category-content">
                        <h3>Men's Clothing</h3>
                        <p>Explore our collection designed for the modern man. 
                            Find everything from casual wear to formal attire.</p>

                        {/* <a href="/shop/men" className="shop-btn">Let's Shop</a> */}
                    </div>
                </div>

                {/* Category Card 3: Jewellery */}
                <div className="category-card jewellery">
                    <img src='/Assets/jewcatt.jpg' alt="Jewellery" />
                    <div className="category-content">
                        <h3>Jewellery</h3>
                        <p>Discover our curated selection of jewellery.
                             From timeless classics to trendy pieces, 
                             find something that suits your style.</p>
                        {/* <a href="/shop/jewellery" className="shop-btn">Let's Shop</a> */}
                    </div>
                </div>

                {/* Category Card 4: Handbags */}
                <div className="category-card handbags">
                    <img src='/Assets/hancat.jpg' alt="Handbags" />
                    <div className="category-content">
                        <h3>Handbags</h3>
                        <p>Explore stylish handbags for every occasion. 
                            Whether you're looking for a tote, clutch, or crossbody, 
                            we have something for you.</p>
                        {/* <a href="/shop/handbags" className="shop-btn">Let's Shop</a> */}
                    </div>
                </div>
            </div>
            <div className="quote-container">
                <p className="quote-text">"Fashion is about dressing according to what’s fashionable. Style is more about being yourself."</p>
                <p className="quote-author">- Oscar de la Renta</p>
            </div>
        </div>
    );
};

export default Categories;
