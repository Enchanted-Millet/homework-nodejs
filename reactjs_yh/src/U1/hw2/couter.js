import React, { Component } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background: Azure;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  margin: auto;
  padding: 20px;
  font-size: 250%;
  text-align: center;
`;

const Footer = styled.div`
  margin: auto;
  font-size: 2px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    width: 100px;
    height: 40px;
    background-color: PaleTurquoise;
    text-align: center;
    color: white;
    border: 1px solid white;
    &:hover {
      opacity: 0.6;
    }
  }
`;

export default class Counter extends Component {
  state = { number: 0 };
  render() {
    return (
      <>
        <h3>hw2: counter</h3>
        <Container>
          <h3>{this.state.number}</h3>
        </Container>
        <Footer>
          <button
            onClick={() => this.setState({ number: this.state.number + 1 })}
          >
            + 1
          </button>
          <button
            onClick={() => this.setState({ number: this.state.number - 1 })}
          >
            - 1
          </button>
        </Footer>
      </>
    );
  }
}
