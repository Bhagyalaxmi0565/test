import React from 'react'
// import Navbar from './Navbar'
import {BrowserRouter,Route,Router, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';

import Contact from './Contact';

const MainComponent = () => {
  return (
    <div>
    <BrowserRouter>
      
      <Routes>
        <Route path="/" eaxct Component={Home} />
        <Route path="/about" eaxct Component={About} />
        <Route path="/dashboard" eaxct Component={Contact} />
        </Routes>

      
    </BrowserRouter>
      
    </div>
  );
}

export default MainComponent

