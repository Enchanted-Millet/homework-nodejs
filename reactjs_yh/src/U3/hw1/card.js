import React from "react";
import styled from "@emotion/styled";

const CardContent = styled.div`
  right: 0;
  position: fixed;
  display: flex;
  width: 50%;
  height: 400px;

  .content {
    right: 0;
    position: fixed;
    width: 50%;
    height: 400px;
  }
  .content[loading="false"] {
    background: Snow;
  }
`;

const Card = (props) => {
  const { oneUserName, repos, loading } = props;
  return (
    <CardContent>
      {loading ? (
        <h2>is loading...</h2>
      ) : (
        <div className="content" loading={loading.toString()}>
          <h1> {oneUserName}</h1>
          <ul>
            {repos.map((repo, idx) => {
              if (idx < 6) {
                return (
                  <li key={idx}>
                    <a href={repo.html_url}>{repo.name} </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      )}
    </CardContent>
  );
};

export default Card;
