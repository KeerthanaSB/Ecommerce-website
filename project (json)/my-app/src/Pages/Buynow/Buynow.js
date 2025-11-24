import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Buynow = () => {
  const location = useLocation();
  const { id } = useParams();
  const { product } = location.state || {};

  if (!product) {
    return <div>Loading...</div>; // Handle loading state if product data is not yet available
  }

  const { image, title, desc, category, type, price } = product;

  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>{desc}</p>
      <p>Category: {category}</p>
      <p>Type: {type}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Buynow;
