import React from 'react'
import { useState } from 'react';

const Sample = () => {
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
        console.log("true")
      }
    else{
        console.log("false")
    }
}

  return (
    <div>
      <input type="text" name="firstname" onChange={handleChange} />
      <input type="password" name="passsword" onChange={handlepassword} />
      <input type='submit' onSubmit={handleSubmit}/>
      
      
      

    </div>
  )
}

export default Sample
