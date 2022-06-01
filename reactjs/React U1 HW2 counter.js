import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 1};
  }
  addOne = () => {
    this.setState({number: this.state.number + 1});
  };
  minusOne = () => {
    this.setState({number:this.state.number - 1});
  };
  render() {
    return (
      <div>
        <p>Counter: {this.state.number}</p>
        <button onClick={this.addOne}>Increase</button>
        <button onClick={this.minusOne}>Decrease</button>
      </div>
    );
  }
}

export default App;
