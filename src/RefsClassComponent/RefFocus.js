import React, { Component } from 'react';
class RefFocus extends Component {
  constructor(props) {
    super(props);
    this.myInputRef = React.createRef();
  }
  componentDidMount() {
    console.log('Ref to the input field:', this.myInputRef);
  }
  focusOnInput = () => {
    this.myInputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.myInputRef} />
        <button onClick={this.focusOnInput}>Focus on Input</button>
      </div>
    );
  }
}

export default RefFocus;
