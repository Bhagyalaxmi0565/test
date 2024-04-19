import React from 'react'
import { Link } from 'react-router-dom';

const ProductList1 = () => {
    const products= [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
        { id: 5, name: 'Product 5' },
        { id: 6, name: 'Product 6' },
        { id: 7, name: 'Product 7' },
        { id: 8, name: 'Product 8' },

        
      ];
  return (
    <div>
      <h2>users List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList1
