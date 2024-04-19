import React from 'react'
import {useRef,useEffect} from 'react';

const FunctionalRefComponent = () => {
    const myRef=useRef(null);
    const hRef=useRef(null);
    useEffect(()=>{
        console.log('Ref to dom element:',myRef.current);
        
    },[])
  return (
    <div>
      <input ref={myRef} type='text'placeholder="Type here" />
      

    </div>
  )
}

export default FunctionalRefComponent
