import React from "react";

const info = (props) => {
  const { title, htmlFor, id, type } = props;
  const setChange = (e) => {
    props.onChange(e.target.value, id);
  };
  return (
    <>
      <label htmlFor={htmlFor}>{title}: </label>
      <input
        id={id}
        type={type}
        value={props.value}
        onChange={setChange}
      ></input>
    </>
  );
};
export default info;
