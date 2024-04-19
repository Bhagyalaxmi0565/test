import React from 'react';

const SimpleList2 = () => {
  
  const complexArray = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Bob Johnson', age: 28 },
    { id: 4, name: 'Alice Williams', age: 22 },
  ];

  return (
    <div>
      <h2>Complex List</h2>
      <ul>
        
        {complexArray.map((item) => (
          <li key={item.id}>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleList2;
