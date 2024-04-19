import React from 'react';

const FunctionalButtonClicker = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default FunctionalButtonClicker;
