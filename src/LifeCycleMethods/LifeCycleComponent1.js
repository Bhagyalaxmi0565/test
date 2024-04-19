import React, { Component } from 'react';

class LifeCycleComponent1 extends Component {
  componentDidMount() {
    console.log('componentDidMount is called');
    
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate is called');
    
  }

  componentWillUnmount() {
    console.log('componentWillUnmount is called');
    
  }

  render() {
    return (
      <div>
        Component 1
      </div>
    );
  }
}

export default LifeCycleComponent1;
