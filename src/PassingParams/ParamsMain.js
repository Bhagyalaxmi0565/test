import React from 'react'
import { BrowserRouter, Route, Routes,Link, NavLink } from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import Users from './Users'
import UsersDetails from './UsersDetails'


function ParamsMain() {
  return (
    <div>
      <BrowserRouter>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/users">Users</NavLink>
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:userId' element={<UsersDetails/>}/>

        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default ParamsMain
