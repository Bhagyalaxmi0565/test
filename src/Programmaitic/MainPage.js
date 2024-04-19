import React from 'react'
import { BrowserRouter, Route, Routes,Link, NavLink } from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import ContactPage from './ContactPage'
import Success from './Success'

function MainPage() {
  return (
    <div>
      <BrowserRouter>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      {/* <NavLink to="/success">Success</NavLink> */}
    {/* <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
      </ul> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/Contact' element={<ContactPage/>}/>
        <Route path='success' element={<Success/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainPage
