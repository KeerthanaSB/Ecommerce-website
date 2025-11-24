import React from 'react';
import './Carwom.css'; // Import your CSS file for styling
import DressImage1 from '../../Components/Assets/hand.jpg'; // Replace with actual dress images
import DressImage2 from '../../Components/Assets/women1.jpg'; // Replace with actual dress images
import DressImage3 from '../../Components/Assets/women2.jpg'; // Replace with actual dress images
import DressImage4 from '../../Components/Assets/women3.jpg'; // Replace with actual dress images

const Carwom = () => {
    // Sample data for dresses
    const dresses = [
        { id: 1, name: "Summer Dress", price: "$49.99", image: DressImage1 },
        { id: 2, name: "Elegant Gown", price: "$199.99", image: DressImage2 },
        { id: 3, name: "Casual Maxi", price: "$99.99", image: DressImage3 },
        { id: 4, name: "Formal Dress", price: "$149.99", image: DressImage4 },
        // Add more dress data as needed
        { id: 5, name: "Boho Chic Dress", price: "$79.99", image: DressImage1 },
        { id: 6, name: "Little Black Dress", price: "$129.99", image: DressImage2 },
        { id: 7, name: "Floral Print Dress", price: "$69.99", image: DressImage3 },
        { id: 8, name: "Vintage Lace Dress", price: "$179.99", image: DressImage4 },
        // Add more dress data as needed
        { id: 9, name: "Striped Midi Dress", price: "$89.99", image: DressImage1 },
        { id: 10, name: "Cocktail Dress", price: "$159.99", image: DressImage2 },
        { id: 11, name: "Off-shoulder Dress", price: "$109.99", image: DressImage3 },
        { id: 12, name: "Printed Wrap Dress", price: "$119.99", image: DressImage4 },
        // Add more dress data as needed
    ];

    return (
        <div className="carwom-container">
            <h2 className="carwom-heading">Women's Dresses</h2>
            <div className="carwom-grid">
                {dresses.map(dress => (
                    <div key={dress.id} className="carwom-card">
                        <img src={dress.image} alt={dress.name} />
                        <div className="carwom-content">
                            <h3>{dress.name}</h3>
                            <p>{dress.price}</p>
                            
                            <button className="buy-button">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carwom;
