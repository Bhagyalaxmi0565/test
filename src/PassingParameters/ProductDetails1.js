import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails1 = () => {
    const { id } = useParams();

  return (
    <div>
      <h2>Profile Detail</h2>
      <p>Profile ID: {id}</p>
    </div>
  )
}

export default ProductDetails1
