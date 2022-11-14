import React from "react";
import styled from "@emotion/styled";

const Menu = styled.div`
  margin-right: 5%;
  margin-left: auto;
`;

const colorsMenu = (props) => {
  const setColor = (e) => {
    props.onChangeColor(e.target.value);
  };
  return (
    <Menu>
      <label forhtml="colorMenu">select a color: </label>
      <select name="colorMenu" id="colorMenu" onChange={setColor}>
        <option>selete a color</option>
        <option value="BlueViolet">BlueViolet</option>
        <option value="CornflowerBlue">CornflowerBlue</option>
        <option value="HotPink">HotPink</option>
        <option value="MediumSpringGreen">MediumSpringGreen</option>
        <option value="MediumPurple">MediumPurple</option>
        <option value="LightSalmon">LightSalmon</option>
        <option value="Aquamarine">Aquamarine</option>
        <option value="LightPink">LightPink</option>
        <option value="Plum">Plum</option>
      </select>
    </Menu>
  );
};
export default colorsMenu;
