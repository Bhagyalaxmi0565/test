import React, { useState } from 'react';

const ConditionalComponent = () => {
  const [isConditionMet, setIsConditionMet] = useState(true);
  const toggleCondition = () => {
    setIsConditionMet(!isConditionMet);
  };

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {isConditionMet ? (
        <p style={{color:"green"}}>Condition is met!</p>
      ) : (
        <p style={{color:"red"}}>Condition is not met!</p>
      )}

      <button onClick={toggleCondition}>
        Toggle Condition
      </button>
    </div>
  );
};

export default ConditionalComponent;
