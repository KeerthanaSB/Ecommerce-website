import React, { useState } from 'react';
import './Shoes.css'; // Import your CSS file for styling
import { BsHeart } from 'react-icons/bs';
import data from '../../Data/shoes'; // Adjust the path according to your project structure
import axios from 'axios';

const Shoes = () => {
  const [items, setItems] = useState(data);
  const [popup, setPopup] = useState(false);

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

  const handleBuyNow = (id) => {
    console.log(`Buy now clicked for item with id: ${id}`);
  };

  return (
    <>
      <h1 className="pt-10 text-center font-bold text-4xl">Shoes</h1>
      <section className="shoes-section">
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

export default Shoes;
