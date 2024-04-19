import React from 'react'
import ProductsData from './ProductsData'
import {Link} from 'react-router-dom';

function Products() {
  return (
    <div>
      <h1>Products</h1>
      {
        ProductsData.map((eachProduct)=>{
            const{id,title,price}=eachProduct;
            return( <Link to={`/products/${id}`} key={id}>
            <article>
            <h3>{title}</h3>
            </article>
            </Link>
            );
        })}
    </div>
  );
}

export default Products
