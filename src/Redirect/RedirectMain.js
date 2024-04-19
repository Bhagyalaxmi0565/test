import React from 'react'
import { BrowserRouter, Route, Routes,Link, NavLink } from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import ProductDetails4 from './ProductDetails4'
import ProduList4 from './ProductsList4'



function RedirectMain() {
  return (
    <div>
      <BrowserRouter>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/product">Product</NavLink>

      
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/product' element={<ProduList4/>}/>
        <Route path="/product/:id" element={<ProductDetails4/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RedirectMain
