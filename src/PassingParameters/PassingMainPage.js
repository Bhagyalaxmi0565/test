import React from 'react'
import { BrowserRouter, Route, Routes,Link, NavLink } from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import ProductDetails1 from './ProductDetails1'
import ProduList1 from './ProductList1'



function PassingMainPage() {
  return (
    <div>
      <BrowserRouter>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/product">Product</NavLink>

      
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/product' element={<ProduList1/>}/>
        <Route path="/product/:id" element={<ProductDetails1/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default PassingMainPage
