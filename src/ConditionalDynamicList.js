import React, { useState } from 'react';

const ConditionalDynamicList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [newItem, setNewItem] = useState('');

  
  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  
  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Conditional Dynamic List</h2>
      <ul>
        
        {items.map((item, index) => {
          
          if (index % 2 === 0) {
            return (
              <li key={index}>
                {item}
                <button onClick={() => removeItem(index)}>Remove</button>
              </li>
            );
          } else {
            return null; 
          }
        })}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
};

export default ConditionalDynamicList;
