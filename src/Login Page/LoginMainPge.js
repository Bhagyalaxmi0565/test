import React from 'react'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import Programmatic from './Programmatic'


function LoginMainPge() {
  return (
    <div>
      <BrowserRouter>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">login</NavLink>
      <NavLink to="/programmatic">programmatic</NavLink>
      
      
   
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/programmatic' element={<Programmatic/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default LoginMainPge
