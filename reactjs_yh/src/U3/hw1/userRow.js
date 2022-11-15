import React from "react";
import styled from "@emotion/styled";

const Row = styled.tr`
  &:hover {
    background: Snow;
  }

  td {
    border-bottom: 2px solid LightGrey;
    text-align: center;
    img {
      width: 100%;
    }
  }
`;

const UserRow = (props) => {
  const { username, avatar, id, handleClick } = props;
  const setClick = () => {
    handleClick(id);
  };
  return (
    <Row key={id + 1} onClick={setClick}>
      <td>{id + 1}</td>
      <td>{username}</td>
      <td>
        <img width="100px" src={avatar} alt="profile"></img>
      </td>
    </Row>
  );
};
export default UserRow;
