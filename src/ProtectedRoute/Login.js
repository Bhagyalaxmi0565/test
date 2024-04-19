import React, { useState } from 'react'


const Login = () => {
    const [username,setUsername]=useState('')
    // const [password,setPassword]=useState('')
    let user=[{name:"john",password:"john"},{name:"allen",password:"allen"}]
    handleUser=(e)=>{
        setUsername(e.target.value);
    };
    handlePassword=(e)=>{
        setPassword(e.target.value);

    }
    if(user.name==username){
        console.log("ture");
    }
    else
    console.log("ture");

  return (
    <div>
      <h1>Login page</h1>
      <input type='text' name='username' onChange={handleUser}/>
      <input type='password' name='password' onChange={handlePassword} />
    </div>
  )
}

export default Login
