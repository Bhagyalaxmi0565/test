import React, { useRef } from 'react';

class RefComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  focusInputField = () => {
    this.myRef.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" />
      </div>
    );
  }
}

export default RefComponent;
