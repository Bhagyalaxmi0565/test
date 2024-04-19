import React from 'react'
import UsersData from './UsersData'
import {Link} from 'react-router-dom';

function Users() {
  return (
    <div>
      <h1>Users</h1>
      {
        UsersData.map((eachUser)=>{
            const{id,name,email}=eachUser;
            return( <Link to={`/users/${id}`} key={id}>
            <article>
            <h3>{name}</h3>
            <h3>{email}</h3>
            </article>
            </Link>
            );
        })}
    </div>
  );
}

export default Users
