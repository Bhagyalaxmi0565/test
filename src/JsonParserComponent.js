import React, { useEffect } from 'react';

const JsonParserComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        console.log('Parsed JSON Data:', jsonData);
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default JsonParserComponent;
