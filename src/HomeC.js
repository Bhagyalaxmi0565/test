// Home.js

import React from 'react';
import { useHistory } from 'react-router-dom';

const HomeC= () => {
  const history = useHistory();

  const handleButtonClick = () => {
    // Navigate to the 'About' component
    history.push('/about');
  };

  return (
    <div>
      <h1>Home Component</h1>
      <button onClick={handleButtonClick}>Go to About</button>
    </div>
  );
};

export default HomeC;
