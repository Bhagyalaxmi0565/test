import React from 'react'
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'
// import Dashboard from './Dashboard'
// import AboutPage from './AboutPage'

const HomePage=React.lazy(()=>import('./HomePage'));
const AboutPage=React.lazy(()=>import('./AboutPage'));
const Dashboard=React.lazy(()=>import('./Dashboard'));
const Profile=React.lazy(()=>import('./Profile'));
const Settings=React.lazy(()=>import('./Settings'));

// import Profile from './Profile'
// import Settings from './Settings'


const LazyLoadingMain = () => {
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

export default LazyLoadingMain
