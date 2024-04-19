import React, { useRef, useEffect } from 'react';

const FunctionalRefComponent = () => {
  const myRef = useRef(null);

  useEffect(() => {
    console.log('Reference to the DOM element:', myRef.current);
  }, []); 

  return (
    <div>
      <div ref={myRef}>
        Content inside FunctionalRefComponent
      </div>
    </div>
  );
};

export default FunctionalRefComponent;
