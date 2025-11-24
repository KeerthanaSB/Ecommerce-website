import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cart.css'; // Import the CSS file

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Fetch cart items from the server
        fetchCartItems();
    }, []);

    const fetchCartItems = () => {
        axios.post('http://localhost:5050/getproduct', {})
            .then(response => {
                setCartItems(response.data.documents);
            })
            .catch(error => {
                console.error("There was an error fetching the cart items!", error);
            });
    };

    const handleDelete = (id, title) => {
        // Confirmation dialog before deletion
        const confirmDelete = window.confirm(`Do you want to delete "${title}" from your cart?`);
        if (confirmDelete) {
            // Send delete request to server
            axios.post('http://localhost:5050/deleteproduct', { id })
                .then(response => {
                    console.log("Product deleted successfully!");
                    // Refresh cart items after deletion
                    fetchCartItems();
                })
                .catch(error => {
                    console.error("There was an error deleting the product!", error);
                });
        }
    };

    return (
        <div className="cart-container">
            <h1 className="cart-header">Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="cart-empty">Your cart is empty.</p>
            ) : (
                <ul className="cart-list">
                    {cartItems.map(item => (
                        <li key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <div className="cart-item-details">
                                <h2 className="cart-item-title">{item.title}</h2>
                                <p className="cart-item-desc">{item.desc}</p>
                                <p className="cart-item-type">Type: {item.type}</p>
                                <p className="cart-item-category">Category: {item.category}</p>
                                <p className="cart-item-price">${item.price}</p>
                                <button className="delete-btn" onClick={() => handleDelete(item.id, item.title)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
