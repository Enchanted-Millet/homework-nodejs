import React, { Component } from 'react';
let timerID = null;

class App extends Component {
  constructor(props) {
    super(props);
	  console.log("in constructor");
    this.state = {
      number: 0,
      buttonText1: "stop"
    };
  }

  componentWillMount = () => {
    console.log("in componentWillMount");
    timerID = setInterval(() => this.addOne(), 1000);
  }

  addOne = () => {
    console.log(" in tick()")
    this.setState({
      number: this.state.number + 1
    });
  }

  stopOrStart = () => {
    if(this.state.buttonText1 === "stop"){
      clearInterval(timerID);
      this.setState({
        buttonText1 : "start"
      });
    }
    else{
      this.componentWillMount();
      this.setState({
        buttonText1 : "stop"
      });
    }
    
  }

  reset = () => {
    this.setState({
      number: 0
    });
  }
   

  render() {
	  console.log("in render");
    return (
      <div>
        <h2> {this.state.number}</h2>
        <button onClick={this.stopOrStart}>{this.state.buttonText1}</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default App;
