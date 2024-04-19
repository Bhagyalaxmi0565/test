import React, { Component } from 'react';

class Refs extends Component {
  constructor(props) {
    super(props);

    
    this.myInputRef = React.createRef();
  }

  componentDidMount() {
    
    const inputElement = this.myInputRef.current;

   
    console.log('Ref to Input Element:', inputElement);
  }

  render() {
    return (
      <div>
        
        <input type="text" ref={this.myInputRef} placeholder="Type something..." />
      </div>
    );
  }
}

export default Refs;

