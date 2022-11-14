import React, { Component } from "react";
import styled from "@emotion/styled";
import ColorsMenu from "./colorsMenu";
import CompMenu from "./compsMenu";
import CompsBox from "./compsBox";

const Head = styled.div`
  display: flex;
  align-content: stretch;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default class ColorPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["grey", "Lavender", "grey", "Lavender", "grey", "Lavender"],
      compNames: ["comp1", "comp2", "comp3", "comp4", "comp5", "comp6"],
      index: "",
    };
  }
  handleName = (name, idx) => {
    const updateNames = this.state.compNames;
    updateNames[idx] = name;
    this.setState({ ...this.state, compNames: updateNames });
  };
  handleIdx = (idx) => {
    this.setState({ ...this.state, index: +idx });
  };
  handleChangeColor = (color) => {
    const newColors = [...this.state.colors];
    if (typeof this.state.index === "number") {
      newColors[this.state.index] = color;
    }

    console.log(newColors);
    this.setState({ ...this.state, colors: newColors });
  };
  render() {
    return (
      <>
        <h1>color panel</h1>
        <Head>
          <CompMenu names={this.state.compNames} onChange={this.handleIdx} />
          <ColorsMenu onChangeColor={this.handleChangeColor} />
        </Head>
        <CompsBox
          names={this.state.compNames}
          colors={this.state.colors}
          onChange={this.handleName}
        />
      </>
    );
  }
}
