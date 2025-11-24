import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './Buynow.css';
const Buynow = () => {
  const { id,cat } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  console.log(id,cat);
  useEffect(() => {
   
    const fetchProductById = async () => {
      try {
        // Format the id as expected by the backend
        const formattedId = { _id : params.get('id'),
          collection: params.get('cat')
         
        };
        const response = await axios.post('http://localhost:5000/getproductbyid', formattedId);
       
        console.log('Response:', response.data);
 
        if (response.status === 200 && response.data) {
          setProduct(response.data.document); // Update state with fetched product data
        } else {
          setError('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };
    console.log(params.get('id'));
    console.log(params.get('cat'));
 
    fetchProductById();
  }, [id]);
 
  if (loading) {
    return <div>Loading...</div>;
  }
 
  if (error) {
    return <div>{error}</div>;
  }
 
  if (!product) {
    return <div>Product not found</div>;
  }
 
  return (
    <div className="product-details-container">
      <h1 className="product-title">{product.title}</h1>
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-description">
        <p>Category: {product.category}</p>
        <p>Type: {product.type}</p>
        <p>Type: {product.desc}</p>
        <p>Price: ${product.price}</p>

      </div>
    </div>
  );
};
 
export default Buynow;
 
 