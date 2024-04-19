import React from 'react';
import FunctionalButtonClicker2 from './FunctionalButtonClicker2';

const ParentComponent2 = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
    // You can perform any other actions here
  };

  const handleInputChange = (value) => {
    console.log('Input value changed:', value);
    // You can perform any other actions here
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <FunctionalButtonClicker2 onClick={handleButtonClick} onChange={handleInputChange} />
    </div>
  );
};

export default ParentComponent2;
