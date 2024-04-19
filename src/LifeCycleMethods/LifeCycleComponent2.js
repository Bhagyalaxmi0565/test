import React, { Component } from 'react';

class LifecycleComponent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 'mounting',
    };
  }

  componentDidMount() {
    console.log('componentDidMount is called');
    this.setState({ phase: 'mounting' });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate is called');
    this.setState({ phase: 'updating' });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount is called');
    this.setState({ phase: 'unmounting' });
  }
  render() {
    const { phase } = this.state;
    return (
      <div>
        <h2>Component Phase: {phase}</h2>
        {phase === 'creation' && <p>Content during creation phase</p>}
        {phase === 'mounting' && <p>Content during mounting phase</p>}
        {phase === 'updating' && <p>Content during updating phase</p>}
        {phase === 'unmounting' && <p>Content during unmounting phase</p>}
      </div>
    );
  }
}

export default LifecycleComponent2;
