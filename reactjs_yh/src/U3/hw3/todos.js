import React from "react";
import Todo from "./todo";
import styled from "@emotion/styled";

const todos = (props) => {
  let todosToShow = props.todos;
  if (props.filter === "active") {
    todosToShow = props.todos.filter((todo) => todo.completed === false);
  }
  if (props.filter === "done") {
    todosToShow = props.todos.filter((todo) => todo.completed === true);
  }
  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {todosToShow.map((todo, idx) => (
          <Todo
            title={todo.title}
            id={todo.id}
            idx={idx}
            onClick={props.onClick}
            completed={todo.completed}
            onChecked={props.onChecked}
          />
        ))}
      </ul>
    </>
  );
};

export default todos;
