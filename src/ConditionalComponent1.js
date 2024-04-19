import React, { useState } from 'react';

const ConditionalComponent1 = () => {
  const [showContent, setShowContent] = useState(true);

  let contentToRender;

  if (showContent) {
    contentToRender = (
      <div>
        <p>This content is displayed when the boolean variable is true.</p>
        
      </div>
    );
  } else {
    contentToRender = (
      <div>
        <p>This content is displayed when the boolean variable is false.</p>
        
      </div>
    );
  }

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

      {contentToRender}
    </div>
  );
};

export default ConditionalComponent1;
