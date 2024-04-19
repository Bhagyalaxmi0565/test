import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetails4 = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [invalidId, setInvalidId] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setInvalidId(true);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (invalidId) {
    
    return (
      <div>
        <h2>Product not found</h2>
        <p>
          <Link to="/products">Back to Product List</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Product Detail</h2>
      <div>
      {product ? (
        <div>
          <p>Product ID: {product.id}</p>
          <p>Title: {product.title}</p>
          <p>Body: {product.body}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
      </div>
    </div>
  );
};

export default ProductDetails4;
