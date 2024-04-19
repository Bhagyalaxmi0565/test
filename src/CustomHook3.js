import React from 'react';

// Custom hook for managing counter state
const useCounter = (initialValue = 0) => {
  const [count, setCount] = React.useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
};

// Custom hook for handling data fetching
const useFetchData = (url) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Custom hook for interacting with local storage
const useLocalStorage = (key, initialValue) => {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = React.useState(initial);

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};

// Composing the custom hooks in a functional component
const CustomHook3 = () => {
  // Using the custom hooks
  const { count, increment, decrement } = useCounter();
  const { data, loading, error } = useFetchData('https://api.example.com/data');
  const [storedValue, setStoredValue] = useLocalStorage('myData', 'initial');

  return (
    <div>
      <h2>Composed Component</h2>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h3>Data Fetching:</h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}

      <h3>Local Storage:</h3>
      <p>Stored Value: {storedValue}</p>
      <button onClick={() => setStoredValue('new value')}>Set Local Storage</button>
    </div>
  );
};

export default CustomHook3;
