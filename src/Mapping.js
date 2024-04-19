import React from 'react'
import UsersData from './UsersData'

const Mapping = () => {
  return (
    <div>
        {UsersData.map((eachUser)=><p key={eachUser.id}>{eachUser.name}</p>)}

      
    </div>
  )
}

export default Mapping
