import React from 'react'
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom'

import HomePage from './HomePage'
import User from './User'
import Admin from './Admin'
import PublicElement from './PublicElement'
import UserElement from './UserElement'
import AdminElement from './AdminElement'
const users={
  public:"public User",
  normal:"Normal User",
  admin:"Admin"

}
const currentuser=users.public

const ProtectedMain = () => {

  return (

    <div>
        <BrowserRouter>
        <Link to ="/">Home</Link>
        <Link to ="/user">User</Link>
        <Link to ="/admin">Admin</Link>
        <Routes>
            <Route path ="/" element={<PublicElement><HomePage/></PublicElement>}/>
            <Route path="/user" element={<UserElement><User/></UserElement>}/>
            <Route path="/admin" element={<AdminElement><Admin/></AdminElement>}/>  
            <Route path="*" element={<div>Page not found</div>}/>
        </Routes>
        </BrowserRouter>
    </div>

  )
}

export default ProtectedMain
