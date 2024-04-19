import React, { useState, useEffect } from 'react';

const ErrorHandlingComponent = () => {
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setParsedData(jsonData);
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
        setError('Failed to fetch JSON data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <div>
          <p>Error: {error}</p>
        </div>
      ) : parsedData ? (
        <div>
          <h2>Specific Information:</h2>
          <p>Title: {parsedData.title}</p>
          <p>Description: {parsedData.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ErrorHandlingComponent;
