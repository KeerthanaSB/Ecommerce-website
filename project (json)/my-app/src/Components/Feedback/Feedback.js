import axios from 'axios';

import React, { useState } from 'react';

import './Feedback.css';


const Feedback = () => {

    const [feedback, setFeedback] = useState({

        name: '',

        email: '',

        message: ''

    });

    const [error, setError] = useState('');

    const [showPopup, setShowPopup] = useState(false);

    const [successMessage, setSuccessMessage] = useState('');



    const handleChange = (e) => {

        const { name, value } = e.target;

        setFeedback(prevFeedback => ({

            ...prevFeedback,

            [name]: value

        }));

    };

    const submitFeedback = async () => {

        try {

            const response = await axios.post('http://localhost:5000/insertdata', feedback);

            console.log(response.data);

            setFeedback({
               name: '',

                email: '',

                message: ''

            });

            setSuccessMessage('Feedback submitted successfully!');

            setShowPopup(false);

        } catch (error) {

            setError('Feedback submission failed. Please try again.');

            setShowPopup(true);

        }

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        submitFeedback();

    };


    // Sample quotes with different colors

    const quotes = [

        {

            text: "To provide fashion-forward clothing that empowers individuals to express their unique style.",

            color: "#ffc107" // Yellow

        },

        {

            text: "Our mission is to deliver exceptional customer service and ensure a seamless shopping experience.",

            color: "#17a2b8" // Teal

        },

        {

            text: "We believe in offering high-quality clothing designed to elevate your style.",

            color: "#28a745" // Green

        },

    ];

    return (

        <section className="feedback-section">

            <div className="feedback-content">

                <div className="feedback-form-container">

                    <h2>Give Us Your Feedback</h2>

                    <form className="feedback-form" onSubmit={handleSubmit}>

                        <div className="form-group">

                            <label htmlFor="name">Name:</label>

                            <input type="text" id="name" name="name" value={feedback.name} onChange={handleChange} required />

                        </div>

                        <div className="form-group">

                            <label htmlFor="email">Email:</label>

                            <input type="email" id="email" name="email" value={feedback.email} onChange={handleChange} required />

                        </div>

                        <div className="form-group">

                            <label htmlFor="message">Message:</label>

                            <textarea id="message" name="message" rows="4" value={feedback.message} onChange={handleChange} required></textarea>

                        </div>

                        <button type="submit">Submit</button>

                        {showPopup && <div className="error-message">{error}</div>}

                        {successMessage && <div className="success-message">{successMessage}</div>}

                    </form>

                </div>

                <div className="feedback-quotes-container">

                    {quotes.map((quote, index) => (

                        <div key={index} className="feedback-quote" style={{ backgroundColor: quote.color }}>

                            <h3>Quote {index + 1}</h3>

                            <p>{quote.text}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};



export default Feedback;