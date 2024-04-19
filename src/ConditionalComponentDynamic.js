import React from 'react';
import A from './A'
import B from './B'
import C from './C'
const componentsArray = [A,B,C];

const DynamicRenderingComponent = ({ condition }) => {
  
  const SelectedComponent = condition ? componentsArray[0] : componentsArray[1];

  return (
    <div>
      <h2>Dynamic Component Renderer</h2>
      <SelectedComponent />
    </div>
  );
};

export default DynamicRenderingComponent;
