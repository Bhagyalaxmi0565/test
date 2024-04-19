import React, { useState, useEffect } from 'react';

// Custom hook for handling data fetching
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, [url]); // Dependency array, re-run effect when url changes

  return { data, loading, error };
};

// Functional component using the custom effect hook
const CustomHook1 = ({ apiUrl }) => {
  // Using the custom hook
  const { data, loading, error } = useFetchData(apiUrl);

  return (
    <div>
      <h2>Data Fetching Component</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h3>Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CustomHook1;
