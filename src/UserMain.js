// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import UserProfile from './UserProfile';

const UserMain = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/user/:id" component={UserProfile} />
      </Routes>
    </Router>
  );
};

export default UserMain;
