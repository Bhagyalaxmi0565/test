import React from 'react'
import { Navigate } from 'react-router-dom';
const users={
    public:"public User",
    normal:"Normal User",
    admin:"Admin"
  
  }
  const currentuser=users.public

export default function AdminElement({children}) {
    if(currentuser===users.admin)
    {
        return <>{children}</>;
    }
    else{
        return <Navigate to={"/"}/>;
    }
  
}
