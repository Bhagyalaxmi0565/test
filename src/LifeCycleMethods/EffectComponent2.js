import React, { useState, useEffect } from 'react';

const EffectComponent2 = () => {
  const [phase, setPhase] = useState('creation');
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('componentDidMount (useEffect) is called');
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const fetchedData = await response.json();
        console.log('Fetched Data:', fetchedData);
        setData(fetchedData);
        setPhase('mounting');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    return () => {
      console.log('componentWillUnmount (useEffect cleanup) is called');
    };
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate (useEffect) is called');
    
    return () => {
      console.log('Cleanup for componentDidUpdate (useEffect) is called');
      
    };
  }, [phase]); 

  return (
    <div>
      <h2>Component Phase: {phase}</h2>
      {phase === 'creation' && <p>Content during creation phase</p>}
      {phase === 'mounting' && (
        <div>
          <p>Content during mounting phase</p>
          {data && (
            <div>
              <h3>Fetched Data:</h3>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EffectComponent2;
