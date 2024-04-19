import React, { useRef, useEffect } from 'react';
import ChildComponent from './ChildComponent';
const ParentComponent = () => {
  const parentRef = useRef(null);

  useEffect(() => {
    console.log('Reference to the ChildComponent:', parentRef.current);
    if (parentRef.current && parentRef.current.someFunction) {
      parentRef.current.someFunction();
    }
  }, []); 

  return (
    <div>
      <ChildComponent ref={parentRef} />
    </div>
  );
};

export default ParentComponent;
