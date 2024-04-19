import React from 'react'
import ComponentC from './ComponentC';
export const UserContext=React.createContext();

function UseContextComponent() {
  return (
    <div>
        <center>
            <UserContext.Provider value={"Learning React"}>
                <ComponentC/>
            </UserContext.Provider>
        </center>
      
    </div>
  )
}

export default UseContextComponent
