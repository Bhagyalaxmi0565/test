import React, { useState, useEffect } from 'react';

const JsonParserComponent2 = () => {
  const [parsedData, setParsedData] = useState(null);

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
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {parsedData ? (
        <div>
           
        <h2>Specific Information:</h2>
        <p>Title: {parsedData.title}</p>
        <p>Description: {parsedData.description}</p>
        {/* Add more specific information rendering based on your JSON structure */}
      </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JsonParserComponent2;
