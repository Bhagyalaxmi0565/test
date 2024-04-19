import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default UserProfile;
