import React, { Component } from 'react';

class LifecycleComponent3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 'creation',
      data: null,
    };
  }

  componentDidMount() {
    console.log('componentDidMount is called');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Data:', data);
        this.setState({ data, phase: 'mounting' });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  componentDidUpdate() {
    console.log('componentDidUpdate is called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount is called');
  }

  render() {
    const { phase, data } = this.state;

    return (
      <div>
        <h2>Component Phase: {phase}</h2>
        {phase === 'creation' && <p>Content during creation phase</p>}
        {phase === 'mounting' && (
          <div>
            <p>Content during mounting phase</p>
            {data && (
              <div>
                <h3>Fetched Data:</h3>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default LifecycleComponent3;
