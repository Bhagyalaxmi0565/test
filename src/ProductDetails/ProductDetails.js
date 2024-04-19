import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsData from './ProductsData';

function ProductsDetails() {
    const {productId}=useParams();
    const ProductsDetailsData=ProductsData.find((eachProduct)=>eachProduct.id==productId);
  return (
    <div>
      <h1>Product Details</h1>
      <h1>{ProductsDetailsData.title}</h1>
      <h3>price:{ProductsDetailsData.price}</h3>

      
    </div>
  );
}

export default ProductsDetails
