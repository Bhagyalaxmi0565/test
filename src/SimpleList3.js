import React from 'react';


const SimpleList3 = () => {
  
  const stringArray = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
      <h2>Keyed List (without keys)</h2>
      <ul>
        
        {stringArray.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleList3;
