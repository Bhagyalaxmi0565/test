import React, { useState, useMemo } from 'react';

const UseMemoComponent = () => {
  
  const [inputValue, setInputValue] = useState(0);

  
  const computeResult = (value) => {
    console.log("Performing expensive computation...");

    let result = 1;
    for (let i = 1; i <= value; i++) {
      result *= i;
    }
    return result;
  };


  const memoizedResult = useMemo(() => {
    return computeResult(inputValue);
  }, [inputValue]);

  return (
    <div>
      <h2>Expensive Computation Component</h2>
      <label>
        Input Value:
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(parseInt(e.target.value))}
        />
      </label>
      <p>Result of Expensive Computation: {memoizedResult}</p>
    </div>
  );
};

export default UseMemoComponent;
