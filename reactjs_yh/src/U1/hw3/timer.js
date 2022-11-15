import React, { Component } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100px;
  heigh: 150px;
  margin: auto;
  padding: 20px 50px;
  text-align: center;
  font-size: 150%;
  background: Azure;
  h1 {
    color: grey;
  }
`;
const Footer = styled.div`
  width: 200px;
  margin: auto;
  background: white;
  display: flex;
  justify-content: space-between;
  button {
    width: 100px;
    height: 50px;
    background-color: PaleTurquoise;
    color: white;
    border: 2px solid white;
    h1{
        font-size
    }
    &:hover {
      opacity: 60%;
    }
  }
`;

export default class Timer extends Component {
  state = { number: 0, isStarted: false };
  handleTimerClick = (e) => {
    console.log(e.target.name);
    if (e.target.name === "start" || e.target.name === "stop") {
      this.setState({ isStarted: !this.state.isStarted });

      if (e.target.name === "start") {
        this.intervId = setInterval(() => {
          this.setState({ number: this.state.number + 1 });
          console.log(this.intervId);
        }, 1000);
      }
      if (e.target.name === "stop") {
        clearInterval(this.intervId);
      }
    }
    if (e.target.name === "reset") {
      this.setState({ number: 0 });
      console.log(this.state);
    }
  };
  render() {
    return (
      <>
        <h3>hw3:timer</h3>
        <Container>
          <h1>{this.state.number}</h1>
        </Container>
        <Footer>
          {this.state.isStarted ? (
            <button name="stop" onClick={this.handleTimerClick}>
              stop{" "}
            </button>
          ) : (
            <button name="start" onClick={this.handleTimerClick}>
              start{" "}
            </button>
          )}
          <button name="reset" onClick={this.handleTimerClick}>
            reset
          </button>
        </Footer>
      </>
    );
  }
}
