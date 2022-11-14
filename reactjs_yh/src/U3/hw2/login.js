import React, { Component } from "react";
import Info from "./info";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedin: false,
      error: false,
    };
  }
  attributes = [
    {
      title: "User Name",
      htmlFor: "username",
      id: "username",
      type: "text",
    },
    {
      title: "Password",
      htmlFor: "password",
      id: "password",
      type: "password",
    },
  ];
  validation() {
    const today = new Date();
    const yesterday = new Date(today);
    const tomorrow = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return {
      today: `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`,
      yesterday: `${yesterday.getFullYear()}${yesterday.getMonth() +
        1}${yesterday.getDate()}`,
      tomorrow: `${tomorrow.getFullYear()}${tomorrow.getMonth() +
        1}${tomorrow.getDate()}`,
    };
  }
  handleInput = (value, id) => {
    this.setState({ ...this.state, [id]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let valids = this.validation();
    if (valids[this.state.username] === this.state.password) {
      this.setState({ ...this.state, loggedin: true });
      console.log("login");
    } else {
      this.setState({ ...this.state, error: true });
      console.log("nothing");
      console.log(valids[this.state.username]);
    }
  };
  handleLogout = () => {
    this.setState({ ...this.state, loggedin: false });
  };

  render() {
    // let valids = this.validation();
    // console.log(valids.today); //20221112
    // console.log(valids.yesterday); //20221111
    // console.log(valids.tomorrow); //20221113
    return (
      <>
        {this.state.loggedin ? (
          <>
            <h2 style={{ marginLeft: "40px" }}>welcome</h2>
            <button style={{ marginLeft: "40px" }} onClick={this.handleLogout}>
              log out
            </button>
          </>
        ) : (
          <>
            <h2 style={{ marginLeft: "40px" }}>LOGIN</h2>
            <form onSubmit={this.handleSubmit}>
              <ul style={{ listStyleType: "none" }}>
                {this.attributes.map((attribute) => (
                  <li key={attribute.id}>
                    <Info
                      {...attribute}
                      value={this.state[attribute.id]}
                      onChange={this.handleInput}
                    />
                  </li>
                ))}
                <input value="Submit" type="submit"></input>
                {this.state.error ? (
                  <span style={{ color: "red" }}>
                    {" "}
                    wrong username or password
                  </span>
                ) : (
                  <></>
                )}
              </ul>
            </form>
          </>
        )}
      </>
    );
  }
}
