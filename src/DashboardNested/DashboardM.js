import React from 'react';
import { BrowserRouter as Routes, Route,BrowserRouter, NavLink } from 'react-router-dom';
import Dashboard from './DashboardN';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

const DashboardM = () => {
  return (
    <BrowserRouter>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/dashboard" component={<Dashboard/>} />

      </Routes>
        {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
      </BrowserRouter>
  );
};

export default DashboardM;
