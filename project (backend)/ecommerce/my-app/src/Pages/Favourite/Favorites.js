import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Favorites.css'; // Import the CSS file

const Favorites = () => {
    const [favoriteItems, setFavoriteItems] = useState([]);

    useEffect(() => {
        // Fetch favorite items from the server
        fetchFavoriteItems();
    }, []);

    const fetchFavoriteItems = () => {
        axios.post('http://localhost:5000/getfavorites', {})
            .then(response => {
                setFavoriteItems(response.data.documents);
            })
            .catch(error => {
                console.error("There was an error fetching the favorite items!", error);
            });
    };

    const handleRemoveFromFavorites = (id, title) => {
        // Confirmation dialog before removal
        const confirmRemove = window.confirm(`Do you want to remove "${title}" from your favorites?`);
        if (confirmRemove) {
            // Send remove request to server
            axios.post('http://localhost:5000/removefromfavorites', { id })
                .then(response => {
                    console.log("Item removed from favorites successfully!");
                    // Refresh favorite items after removal
                    fetchFavoriteItems();
                })
                .catch(error => {
                    console.error("There was an error removing the item from favorites!", error);
                });
        }
    };

    return (
        <div className="favorites-container">
            <h1 className="favorites-header">Your Favorites</h1>
            {favoriteItems.length === 0 ? (
                <p className="favorites-empty">Your favorites list is empty.</p>
            ) : (
                <ul className="favorites-list">
                    {favoriteItems.map(item => (
                        <li key={item.id} className="favorite-item">
                            <img src={item.image} alt={item.title} />
                            <div className="favorite-item-details">
                                <h2 className="favorite-item-title">{item.title}</h2>
                                <p className="favorite-item-desc">{item.desc}</p>
                                <p className="favorite-item-type">Type: {item.type}</p>
                                <p className="favorite-item-category">Category: {item.category}</p>
                                <p className="favorite-item-price">${item.price}</p>
                                <button className="remove-from-favorites-btn" onClick={() => handleRemoveFromFavorites(item.id, item.title)}>
                                    Remove from Favorites
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Favorites;
