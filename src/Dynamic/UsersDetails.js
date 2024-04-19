import React from 'react'
import { useParams } from 'react-router-dom';

const UserDetails1 = () => {
    const { id } = useParams();

  return (
    <div>
      <h2>Product Detail</h2>
      <p>Product ID: {id}</p>
    </div>
  )
}

export default UserDetails1
