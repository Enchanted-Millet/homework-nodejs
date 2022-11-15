import React from "react";

const filters = (props) => {
  const setClick = (e) => {
    props.onClick(e.target.className);
    console.log(e.target.className);
  };
  return (
    <>
      <button
        className="all"
        disabled={props.filter === "all"}
        onClick={setClick}
      >
        all
      </button>
      <button
        className="active"
        disabled={props.filter === "active"}
        onClick={setClick}
      >
        active
      </button>
      <button
        className="done"
        disabled={props.filter === "done"}
        onClick={setClick}
      >
        done
      </button>
    </>
  );
};
export default filters;
