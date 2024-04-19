import React from 'react'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import ProductDetails2 from './ProductDetails2'
import ProductList from './ProductList'


function DynamicMain() {
  return (
    <div>
      <BrowserRouter>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/product">Product</NavLink>
      
      
   
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/product' element={<ProductList/>}/>
        <Route path='/product/:id' element={<ProductDetails2/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default DynamicMain
