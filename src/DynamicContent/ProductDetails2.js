
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails2 = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div>
      <h2>Product Detail</h2>
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
  );
};

export default ProductDetails2;
