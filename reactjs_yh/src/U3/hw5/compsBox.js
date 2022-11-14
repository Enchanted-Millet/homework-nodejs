import React from "react";
import Comp from "./component";
import styled from "@emotion/styled";
const Box = styled.div`
  display: flex;
  align-content: stretch;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const panels = (props) => {
  return (
    <Box>
      {props.names.map((name, idx) => (
        <Comp
          name={name}
          onChange={props.onChange}
          idx={idx}
          colors={props.colors}
        />
      ))}
    </Box>
  );
};
export default panels;
