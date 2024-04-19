import React from 'react'
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Settings from './Settings'

import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ProfileDetails from './ProfileDetails'

const RedirectMain = () => {
  return (
    <div>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        
        
  
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
           <Route path='Profile' element={<Profile/>}/>
           <Route path='profile/:profileId' element={<ProfileDetails/>}/>
           <Route path='Settings' element={<Settings/>}/>
       </Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default RedirectMain
