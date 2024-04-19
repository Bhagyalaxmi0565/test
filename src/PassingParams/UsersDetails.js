import React from 'react';
import { useParams } from 'react-router-dom';
import UsersData from './UsersData';

function UsersDetails() {
    const {userId}=useParams();
    const UsersDetailsData=UsersData.find((eachUser)=>eachUser.id==userId);
  return (
    <div>
      <h1>Users details</h1>
      <h1>{UsersDetailsData.name}</h1>
      <h3>{UsersDetailsData.email}</h3>
      <h2>{UsersDetailsData.username}</h2>
    </div>
  );
}

export default UsersDetails
