import React, { useState } from 'react';

const FunctionalButtonClicker2 = ({ onClick, onChange: externalOnChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    // Call external onChange prop if provided
    if (externalOnChange) {
      externalOnChange(newValue);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={onClick}>Click me</button>
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default FunctionalButtonClicker2;
