import React from 'react'
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Settings from './Settings'

import HomeD from './HomeD'
import AboutD from './AboutD'
import ContactD from './ContactD'

const DashboardMain = () => {
  return (
    <div>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        
  
    <Routes>
        <Route path="/" element={<HomeD/>}/>
        <Route path='/about' element={<AboutD/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
           <Route path='Profile' element={<Profile/>}/>
           <Route path='Settings' element={<Settings/>}/>
       </Route>
        <Route path='/contact' element={<ContactD/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default DashboardMain
