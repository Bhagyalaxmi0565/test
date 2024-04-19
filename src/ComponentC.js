import React from 'react'
import { UserContext } from './UseContextComponent'

function ComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {value=><div>{value}</div>}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentC
