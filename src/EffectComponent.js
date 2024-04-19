import React, { useState,useEffect } from 'react';

const EffectComponent = () => {
  const [count,setCount]=useState(0);
  useEffect(() => console.log("clicked"), [count]); 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
  );
};

export default EffectComponent;
