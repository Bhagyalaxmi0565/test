
import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage1= () => {
  const history = useHistory();

  const navigateToAbout = () => {
    history.push('/about');
  };

  return (
    <div>
      <h2>Home Component</h2>
      <button onClick={navigateToAbout}>Go to About</button>
    </div>
  );
};

export default HomePage1;
