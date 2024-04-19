import React, { useState } from 'react';

const UseSateExample = () => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decrementCounter = () => {
    setCount(count - 1);
  };
  const resetcounter = () => {
    setCount(count - count);
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={resetcounter}>reset</button>

      <p>Current count: {count}</p>
    </div>
  );
};

export default UseSateExample;
