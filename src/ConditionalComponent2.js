import React, { useState } from 'react';

const ConditionalComponent2 = () => {
  
  const [showContent, setShowContent] = useState(true);

  return (
    <div>
      <h1>Conditional Component</h1>
      <label>
        Show Content:
        <input
          type="checkbox"
          checked={showContent}
          onChange={() => setShowContent((prev) => !prev)}
        />
      </label>

      {showContent ? (
        <div>
          <p>This content is displayed when the boolean variable is true.</p>
          
        </div>
      ) : (
        <div>
          <p>This content is displayed when the boolean variable is false.</p>
          
        </div>
      )}
    </div>
  );
};

export default ConditionalComponent2;
