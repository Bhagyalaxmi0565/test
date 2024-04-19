import React, { useState } from 'react';

const LogicalComponent = () => {
  const [isCondition1Met, setIsCondition1Met] = useState(true);
  const [isCondition2Met, setIsCondition2Met] = useState(false);

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

      
      {isCondition1Met && isCondition2Met && (
        <div>
          <p>This content is displayed when both conditions are true.</p>
        </div>
      )}
      {isCondition1Met || isCondition2Met ? null :(
        <div>
          <p>This content is displayed when both conditions are false.</p>
        </div>
      )}
    </div>
  );
};

export default LogicalComponent;
