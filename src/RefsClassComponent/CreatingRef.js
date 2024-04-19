import React, { Component } from 'react';

class CreatingRef extends Component {
  constructor(props) {
    super(props);
    this.myInputRef = React.createRef();
  }
  componentDidMount() {
    console.log('Ref to input field', this.myInputRef);
    this.myInputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.myInputRef} />
      </div>
    );
  }
}

export default CreatingRef;
