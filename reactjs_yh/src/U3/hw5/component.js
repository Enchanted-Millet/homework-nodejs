import React from "react";
import styled from "@emotion/styled";

const Comp = styled.div`
  display: flex;
  padding: 50px;
  margin: 10px;
  flex-direction: column;
  background: ${(props) => props.color};
`;

const comp = (props) => {
  const setChange = (e) => {
    props.onChange(e.target.value, props.idx);
  };
  return (
    <>
      <Comp color={props.colors[props.idx]}>
        <label htmlFor="comp"> type a name: </label>
        <input
          id="comp"
          value={props.name}
          idx={props.idx}
          onChange={setChange}
        ></input>
      </Comp>
    </>
  );
};
export default comp;
