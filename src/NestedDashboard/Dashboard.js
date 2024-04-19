import React from 'react'
import {Link, Outlet} from'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <nav>
        
      <Link to="/dashboard/profile">Profile</Link>
      <Link to="/dashboard/settings">Settings</Link>
      <Outlet/>
      </nav>
    </div>
  )
}

export default Dashboard
