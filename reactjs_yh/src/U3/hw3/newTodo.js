import React from "react";

const newTodo = (props) => {
  return (
    <>
      <input
        value={props.value}
        onChange={(e) => {
          props.handleChange(e.target.value);
        }}
      ></input>
      <button onClick={props.handleSubmit}>submit</button>
    </>
  );
};

export default newTodo;
