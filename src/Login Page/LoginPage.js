import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const LoginPage = () => {
    const navigate=useNavigate();
    const users={
      name:"john",
      passsword:"john"
    
    }
    const [username,setUsername]=useState();
    const [passsword,setPassword]=useState();
    const handleChange=()=>{
        setUsername(username)
    }
    const handlepassword=()=>{
        setPassword(passsword);
    }
    const handleSubmit=()=>{
    if(users.name===username){
    
       const navigateTosuccessPage=()=>{
        navigate("/about");
    }
      }
    else{
        console.log("false")
    }
}

  return (
    <div>
      <input type="text" name="firstname" onChange={handleChange} />
      <input type="password" name="passsword" onChange={handlepassword} />
      <input type='submit' onSubmit={navigateTosuccessPage}/>
      
      
      

    </div>
  )
}

export default LoginPage
