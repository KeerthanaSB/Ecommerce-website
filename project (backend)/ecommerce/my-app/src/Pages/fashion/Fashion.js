import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './Fashion.css';

const Heels = () => {
    const [popup, setPopup] = useState(false);
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (items.length === 0) {
            axios.post('http://localhost:5000/getallfashion', {})
                .then(response => {
                    console.log(response.data.documents);
                    setItems(response.data.documents);
                })
                .catch(error => {
                    console.error('Error getting products', error);
                });
        }
    }, []);

    const handleAddToCart = (item) => {
        axios.post('http://localhost:5000/addproduct', item)
            .then(response => {
                console.log(response.data);
                setPopup(true);
                setTimeout(() => setPopup(false), 5000);
            })
            .catch(error => {
                console.error('Error adding product to cart:', error);
            });
    };

    const handleBuyNow = (id) => {
        navigate(`/Buynow/${id}`);
    };

    const handleAddToFavorites = (item) => {
        axios.post('http://localhost:5000/addtofavorites', item)
            .then(response => {
                console.log("Item added to favorites:", response.data);
                // Optionally, you can update state or show a notification
            })
            .catch(error => {
                console.error("Error adding to favorites:", error);
            });
    };

    return (
        <>
            <h1 className="pt-10 text-center font-bold text-4xl">mens Fashion</h1>
            <section className="heels-section">
                {items.length > 0 && items.map((item) => {
                    const { _id, image, title, desc, category, type, price } = item;

                    return (
                        <div key={_id} className="card">
                            <img src={image} alt={title} className="card-image" />
                            <div className="card-content">
                                <h2 className="card-title">{title}</h2>
                            </div>
                            <div className="button-row">
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => handleAddToCart({ image, desc,title, category, type, price })}
                                >
                                    Add to Cart
                                </button>
                                <button className="buy-now-btn" onClick={() => handleBuyNow(_id)}>
                                    Buy Now
                                </button>
                            </div>
                            <div className="card-footer">
                                <div className="wishlist-price-row">
                                    <BsHeart
                                        title="Add to Wishlist"
                                        className="wishlist-icon"
                                        onClick={() => handleAddToFavorites({ image,desc, title, category, type, price })}
                                    />
                                    <p className="card-price">₹{price}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
            {popup && <div className="popup">Product added to cart!</div>}
        </>
    );
};

export default Heels;
