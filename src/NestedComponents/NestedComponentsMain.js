import React from 'react'
// import Dashboard from './Dashboard'
// import AboutPage from './AboutPage'
// import HomePage from './HomePage'
import { BrowserRouter,Routes,Route,Link, useRouteMatch  } from 'react-router-dom'
import Profile from './Profile'
import Settings from './Settings'

const NestedComponentsMain = () => {
    const match = useRouteMatch();
  return (
    <div>
      <BrowserRouter>
      {/* <NavLink to="/"> Home</NavLink>
      <NavLink to="/about">About</NavLink> */}
      {/* <NavLink to="/Profile"> Profile</NavLink>
      <NavLink to="/settings">Settings</NavLink>
     
       */}
       <nav>
        <ul>
          <li>
            <Link to={`${match.url}/profile`}>Profile</Link>
          </li>
          <li>
            <Link to={`${match.url}/settings`}>Settings</Link>
          </li>
        </ul>
      </nav>
      
    
      <Routes>
        
        {/* <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/> */}
        {/* <Route path='/Profile' element={<Profile/>}/>
        <Route path='/settings' element={<Settings/>}/>
         */}
         <Route path={`${match.path}/profile`} component={Profile} />
        <Route path={`${match.path}/settings`} component={Settings} />
        

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NestedComponentsMain
