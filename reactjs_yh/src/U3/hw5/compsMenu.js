import React from "react";
import styled from "@emotion/styled";

const Menu = styled.div`
  margin-left: 5%;
  margin-right: auto;
`;

const compMenu = (props) => {
  const setComp = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Menu>
      <label forhtml="colorMenu">select a component: </label>
      <select onChange={setComp} name="compsMenu" id="compsMenu">
        <option>component</option>
        {props.names.map((name, idx) => (
          <option key={idx} value={idx}>
            {idx + 1}.{name}
          </option>
        ))}
      </select>
    </Menu>
  );
};
export default compMenu;
