import React from 'react';
import FunctionalButtonClicker from './FunctionalButtonClicker';

const ParentComponent = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <FunctionalButtonClicker onClick={handleButtonClick} />
    </div>
  );
};

export default ParentComponent;
