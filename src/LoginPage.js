import React from 'react'

const LoginPage = () => {
    handleEvent=(e)=>{
        console.log(e.target.value);
    }
  return (
    <div>
      <input type='text' onChange={handleEvent}/>
    </div>
  )
}

export default LoginPage
