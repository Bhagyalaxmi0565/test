import React from 'react'
import { BrowserRouter, Route, Routes,Link, NavLink } from 'react-router-dom'
import AboutP from './AboutP'
import HomeP from './HomeP'
import ContactP from './ContactP'
import Users from './Users'
import UsersDetails from './UsersDetails'

function DynamicMain() {
  return (
    <div>
      <BrowserRouter>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/users">Users</NavLink>
    
      <Routes>
        
        <Route path='/' element={<HomeP/>}/>
        <Route path='/about' element={<AboutP/>}/>
        <Route path='/Contact' element={<ContactP/>}/>
        <Route path='/users'element={<Users/>}/>
        <Route path='users/:userId' element={<UsersDetails/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default DynamicMain
