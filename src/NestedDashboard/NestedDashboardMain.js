import React from 'react'
import Dashboard from './Dashboard'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'
import Profile from './Profile'
import Settings from './Settings'


const NestedDashboardMain = () => {
  return (
    <div>
      <BrowserRouter>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      
      
    
      <Routes>
        
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='profile' element={<Profile/>}/>
        <Route path='settings' element={<Settings/>}/>
        </Route>
        

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NestedDashboardMain
