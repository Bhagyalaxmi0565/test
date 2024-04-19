import React from 'react';

const SimpleList = () => {
  
  const stringArray = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
      <h2>Simple List</h2>
      <ul>
        
        {stringArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleList;
