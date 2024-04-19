import React, { forwardRef, useImperativeHandle } from 'react';
const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    someFunction: () => {
      console.log('Function inside ChildComponent');
    },
  }));

  return (
    <div>
      <input ref={ref} type="text" placeholder="Child Input" />
    </div>
  );
});

export default ChildComponent;
