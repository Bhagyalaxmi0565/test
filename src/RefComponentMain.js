import React from 'react';
import RefComponent from './RefComponent';

class RefComponentMain extends React.Component {
  handleButtonClick = () => {
    this.refComponentInstance.focusInputField();
  };

  render() {
    return (
      <div>
        <RefComponent ref={(ref) => (this.refComponentInstance = ref)} />
        <button onClick={this.handleButtonClick}>Focus Input</button>
      </div>
    );
  }
}

export default RefComponentMain;
