import React from "react";
import stylded from "@emotion/styled";

const todo = (props) => {
  return (
    <>
      <li key={props.id}>
        <input
          type="checkbox"
          onChange={() => props.onChecked(props.id)}
          checked={props.completed}
        ></input>
        {props.title}
        <button onClick={() => props.onClick(props.idx)}>delete</button>
      </li>
    </>
  );
};
export default todo;
