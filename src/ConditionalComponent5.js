import React, { useState } from 'react';

const   ConditionalCompoonent5 = () => {
  
  const [isCondition1Met, setIsCondition1Met] = useState(true);
  const [isCondition2Met, setIsCondition2Met] = useState(false);
  const [isCondition3Met, setIsCondition3Met] = useState(true);

  return (
    <div>
      <h1>Logical Component</h1>
      <label>
        Condition 1:
        <input
          type="checkbox"
          checked={isCondition1Met}
          onChange={() => setIsCondition1Met((prev) => !prev)}
        />
      </label>

      <label>
        Condition 2:
        <input
          type="checkbox"
          checked={isCondition2Met}
          onChange={() => setIsCondition2Met((prev) => !prev)}
        />
      </label>

      <label>
        Condition 3:
        <input
          type="checkbox"
          checked={isCondition3Met}
          onChange={() => setIsCondition3Met((prev) => !prev)}
        />
      </label>

      
      {isCondition1Met && isCondition2Met && isCondition3Met && (
        <div>
          <p>This content is displayed when all conditions are true.</p>
          
        </div>
      )}

      
      {isCondition1Met || isCondition2Met || isCondition3Met ? null : (
        <div>
          <p>This content is displayed when all conditions are false.</p>
          
        </div>
      )}

      
      {(isCondition1Met || isCondition2Met) && isCondition3Met && (
        <div>
          <p>This content is displayed when either Condition 1 or Condition 2 is true, and Condition 3 is true.</p>
          
        </div>
      )}
    </div>
  );
};

export default ConditionalCompoonent5;
