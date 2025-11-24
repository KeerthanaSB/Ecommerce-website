import React, { useState } from 'react';
import './Heels.css';
import { BsHeart } from 'react-icons/bs';
import axios from 'axios';
import data from '../../Data/heels';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Heels = () => {
  const [items, setItems] = useState(data);
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleAddToCart = (item) => {
    axios.post('http://localhost:5050/addproduct', item)
      .then(response => {
        console.log(response.data);
        setPopup(true);
        setTimeout(() => setPopup(false), 5000);
      })
      .catch(error => {
        console.error('There was an error adding the product!', error);
      });
  };

  const handleBuyNow = async (id) => {
    try {
      const response = await axios.post('http://localhost:5050/buynow', { id });
      console.log(response);
      const productData = response.data;
      console.log(productData);
      // Navigate to /Buynow/:id with product data as state
      // navigate(`/Buynow`, { state: { product: productData } });
    } catch (error) {
      console.error('Error fetching product details:', error);
      // Handle error if necessary
    }
  };

  return (
    <>
      <h1 className="pt-10 text-center font-bold text-4xl">Heels</h1>
      <section className="heels-section">
        {items.map((item) => {
          const { id, image, title, desc, category, type, price } = item;

          return (
            <div key={id} className="card">
              <img src={image} alt={title} className="card-image" />
              <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-desc">{desc}</p>
              </div>
              <div className="button-row">
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
                <button className="buy-now-btn" onClick={() => handleBuyNow(id)}>
                  Buy Now
                </button>
              </div>
              <div className="card-footer">
                <div className="wishlist-price-row">
                  <BsHeart
                    title="Add to Wishlist"
                    className="wishlist-icon"
                    onClick={() => console.log(`Added to wishlist: ${id}`)}
                  />
                  <p className="card-price">${price}</p>
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
