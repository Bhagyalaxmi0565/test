
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage1 from './Homepage1';
import AboutPage from './AboutPage';

const MainApp= () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" element={<HomePage1/>} />
        <Route path="/about" element={<AboutPage/>} />
      </div>
    </Router>
  );
};

export default MainApp;
