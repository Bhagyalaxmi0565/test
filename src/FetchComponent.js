import React, { useEffect } from 'react';

const FetchComponent = () => {
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then(
      response=>response.json()).then(json=>console.log(json))
  },[])

  return (
    <div>
      Hello world
    </div>
  );
};

export default FetchComponent;
