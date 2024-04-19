import React, { useState } from 'react';
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
};

const CustomHook = () => {

  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CustomHook;
