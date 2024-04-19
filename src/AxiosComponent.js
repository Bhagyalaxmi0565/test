import React, { useEffect } from 'react';
import axios from 'axios';

const AxiosComponent = () => {
  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/todos').then(response=>console.log(response.data))

    
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default AxiosComponent;
