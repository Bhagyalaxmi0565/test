
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';


const Parentcom= () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        </Routes>  
      
    </BrowserRouter>
  );
};

export default Parentcom;
