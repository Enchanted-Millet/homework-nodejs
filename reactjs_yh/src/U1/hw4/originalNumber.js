import React, { Component } from "react";

export default class filter extends Component {
  state = { input: 0, output: "none" };
  handleChange = (e) => {
    e.preventDefault();
    let input = +e.target.value;
    if (!isNaN(input)) {
      this.setState({ input: e.target.value });
      if (e.target.value.at(-1) === "1") {
        this.setState({ output: `${input}st ` });
        console.log(this.state.output);
      } else if (e.target.value.at(-1) === "2") {
        this.setState({ output: `${input}nd ` });
      } else if (e.target.value.at(-1) === "3") {
        this.setState({ output: `${input}rd ` });
      } else {
        this.setState({ output: `${input}th` });
      }
    } else {
      this.setState({ input: e.target.value, output: e.target.value });
    }
  };
  render() {
    return (
      <>
        <h2>hw4: number filter</h2>
        <h3>{this.state.output}</h3>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        ></input>
      </>
    );
  }
}
