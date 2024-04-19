import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage=()=> {
    const navigate=useNavigate();
    const navigateTosuccessPage=()=>{
        navigate("/success");
    }
  return (
    <div>
      <h1>From home page</h1>
      <button onClick={navigateTosuccessPage}>Submit form</button>
    </div>
  )
}

export default HomePage