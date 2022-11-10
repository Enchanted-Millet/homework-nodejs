import React, { Component } from "react";
import styled from "@emotion/styled";
import { useState } from "react";
// import "./style.css";

// to print~: unicode text keyboard, option+ 007e
const Row = styled.div`
  span {
    color: red;
    display: none;
  }
  input:invalid[focused="true"] ~ span {
    display: block;
  }
`;

const InputRow = (props) => {
  const [focused, setFocused] = useState(false);
  const [valid, setValid] = useState(false);
  const {
    title,
    name,
    id,
    value,
    onChange,
    errorMessage,
    ...inputAttributes
  } = props;
  const handleFocused = (e) => {
    setFocused(true);
    setValid(e.target.checkValidity());
  };

  return (
    <li>
      <Row>
        <label htmlFor={id}>{title}: </label>
        <input
          {...inputAttributes}
          name={name}
          value={value}
          onChange={onChange(value)}
          onBlur={handleFocused}
          onFocus={() => {
            if (name === "confirmPassword") setFocused(true);
          }}
          focused={focused.toString()}
          valid={valid.toString()}
        ></input>
        <span>{errorMessage}</span>
      </Row>
    </li>
  );
};

export default class RegistForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      validation: [],
    };
  }

  inputAttributes = [
    {
      title: "Username",
      id: "username",
      name: "username",
      type: "text",
      placeholder: "type username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      errorMessage: "please enter a valid name",
      required: true,
    },
    {
      title: "Email",
      id: "email",
      name: "email",
      type: "email",
      placeholder: "type a valid email",
      errorMessage: "please enter a valid email",
      required: true,
    },
    {
      title: "Confirm Email",
      id: "confirmEmail",
      name: "confirmEmail",
      type: "email",
      placeholder: "confirm your email",
      errorMessage: "email doesn't match, please check",
      required: true,
    },
    {
      title: "Password",
      id: "password",
      name: "password",
      type: "password",
      placeholder: "type a valid password",
      errorMessage: "please enter a valid password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      title: "Confirm Password",
      id: "confirmPassword",
      name: "confirmPassword",
      type: "password",
      placeholder: "confirm your password",
      errorMessage: "password doesn't match, please check",
      pattern: () => this.state.password, ///
      required: true,
    },
    {
      title: "Dev Skills(5-10)",
      id: "devSkills",
      name: "devSkills",
      type: "number",
      placeholder: "type a number",
    },
  ];

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };
  handleSubmit = () => {
    alert();
  };

  render() {
    return (
      <>
        <h3>Form Register</h3>
        <form>
          <ul>
            {this.inputAttributes.map((inputAttri, idx) => {
              const { title, name, id, type, ...attributes } = inputAttri;
              return (
                <InputRow
                  key={id}
                  {...attributes}
                  title={title}
                  name={name}
                  id={idx}
                  type={type}
                  valid={this.props.valid}
                  password={this.state.password}
                  value={this.state.name}
                  onChange={() => this.handleInput}
                />
              );
            })}
          </ul>

          <footer>
            <button disabled={this.handleSubmit} onClick={this.handleSubmit}>
              submit
            </button>
            <button>clear</button>
          </footer>
        </form>
      </>
    );
  }
}
