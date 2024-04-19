import React from 'react';
import {  Route,Routes, Redirect, BrowserRouter, NavLink } from 'react-router-dom';


const isUserLoggedIn = () => {
  
  return true; 
};


const GuardedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isUserLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};


const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      
    </div>
  );
};

const UserProfile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      
    </div>
  );
};

const MainRoute = () => {
  return (
    <BrowserRouter>
    <NavLink to ="/dashboard">Dashboard</NavLink>
    <NavLink to ="/user-profile">User</NavLink>

      <Routes>
        
        <GuardedRoute path="/dashboard" element={<Dashboard/>} />

        
        <GuardedRoute path="/user-profile" element={<UserProfile/>} />

        </Routes>
      
    </BrowserRouter>
  );
};

export default MainRoute;
