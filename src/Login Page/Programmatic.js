import React from 'react'
import { useNavigate,useState } from 'react-router-dom'

const Programmatic=()=> {
    const [username,setUsername]=useState();
    const [passsword,setPassword]=useState();
    const handleChange=()=>{
        setUsername(username)
    }
    const handlepassword=()=>{
        setPassword(passsword);
    }
    
    const navigate=useNavigate();
    const users={
        name:"john",
        passsword:"john"
      
      }
      const redirect= navigateTosuccessPage=()=>{
        navigate("/about");
    }
      if(users.name===username){
        return redirect
         
    }
    else{
<h1>not found</h1>
    }
      
  return (
    <div>
      <h1>From home page</h1>

      <button onClick={navigateTosuccessPage}>Submit form</button>
      <input type="text" name="firstname" onChange={handleChange} />
      <input type="password" name="passsword" onChange={handlepassword} />
      

    </div>
  )
}

export default Programmatic