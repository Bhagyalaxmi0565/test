import React from 'react'
import { Link } from 'react-router-dom';
import UsersData from './UsersData';

function Users() {
  return (
    <div>
        <h1>Users</h1>
        {UsersData.map((eachUser)=>
        {
const {id,name,email}=eachUser;
return (
    <Link key={id}>
    <article>
        <h3>{name}</h3>
        <h5>{email}</h5>
    </article>
    </Link>
);

        })}
    </div>
  );
}

export default Users
