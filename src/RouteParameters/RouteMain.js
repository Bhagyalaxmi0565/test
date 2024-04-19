import React from 'react'
import { BrowserRouter, Route, Routes,Link, NavLink } from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import User from './User'
import Profile from './Profile'


function RouteMain() {
  return (
    <div>
      <BrowserRouter>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/user">User</NavLink>
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/user/:id' element={<Profile/>}/>
        

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteMain
