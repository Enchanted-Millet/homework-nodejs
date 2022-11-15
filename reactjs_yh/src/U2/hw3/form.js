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
    pattern,
    errorMessage,
    ...inputAttributes
  } = props;

  const handleFocused = (e) => {
    e.preventDefault(); //no default browser message will pop up
    const value = e.target.value;
    setFocused(true);
    onChange(name, value, valid, id);
  };
  const setValueAndValid = (e) => {
    e.preventDefault(); //no default browser message will pop up
    //name, onChange are passed through props
    setValid(e.target.checkValidity());
    if (!focused) {
      onChange(name, e.target.value);
    }
    if (focused) {
      const isValid = e.target.checkValidity();
      //setValid is "async", to avoid one step delay,
      //check e.target.checkValidity() stream directly rather than through "valid"
      onChange(name, e.target.value, isValid, id);
    }
  };
  console.log(name.includes("confirm"));
  return (
    <li>
      <Row>
        <label htmlFor={id}>
          {title}:{focused.toString()}
          {valid.toString()}
        </label>
        <input
          {...inputAttributes}
          pattern={name.includes("confirm") ? pattern() : pattern}
          name={name}
          value={value}
          onChange={setValueAndValid}
          onBlur={handleFocused}
          onFocus={() => {
            if (name.includes("confirm")) setFocused(true);
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
      username: "Nick",
      email: "xxx@ab.com",
      password: "",
      confirmPassword: "",
      valids: [false, false, false, false, false, true],
      // valids: [true, true, true, true, true, true],
    };
    this.inputAttributes = [
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
        type: "text",
        pattern: () => this.state.email,
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
        pattern: () => this.state.password, /////
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
  }

  handleInput = (name, value, valid = false, idx = -1) => {
    this.setState({
      ...this.state,
      [name]: value,
    });
    if (idx > -1) {
      const newValids = [...this.state.valids];
      newValids[idx] = valid;
      this.setState({ valids: newValids });
    }
    // console.log(name, value, valid, idx);
  };

  handleSubmit = () => {
    const { username, email } = this.state;
    alert(`a new user ${username} ${email} has registered!`);
  };
  handleClear = (e) => {
    e.preventDefault();
    this.setState({
      username: "Nick",
      email: "xxx@ab.com",
      password: "",
      confirmPassword: "",
      valids: [false, false, false, false, false, true],
    });
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
                  password={this.state.password}
                  value={this.state[name]}
                  onChange={this.handleInput}
                />
              );
            })}
          </ul>

          <footer>
            <button
              disabled={this.state.valids.filter((valid) => !valid).length}
              onClick={this.handleSubmit}
            >
              submit
            </button>
            <button onClick={this.handleClear}>clear</button>
          </footer>
        </form>
      </>
    );
  }
}
