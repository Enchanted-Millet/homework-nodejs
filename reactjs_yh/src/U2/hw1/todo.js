import React, { Component } from "react";
var id_seed = 4;
export default class todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: "todo1", completed: false, id: 1 },
        { title: "todo2", completed: false, id: 2 },
        { title: "todo3", completed: false, id: 3 },
      ],
      todo: "new todo",
    };
  }
  handleChange = (e) => {
    const { value } = e.target;
    this.setState((prevstate) => ({ ...prevstate, todo: value }));
  };
  handleSubmit = () => {
    let newTodo = { title: this.state.todo, completed: false, id: id_seed++ };
    let newTodos = this.state.todos.concat(newTodo);

    this.setState((prevstate) => ({ ...prevstate, todos: newTodos }));
  };
  handleDelete = (id) => {
    let newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState((prevstate) => ({ ...prevstate, todos: newTodos }));
  };
  handleCompleted = (id) => {
    let updateIdx = this.state.todos.findIndex((todo) => todo.id === id);
    let newTodos = this.state.todos;
    newTodos[updateIdx].completed = !newTodos[updateIdx].completed;
    this.setState((prevstate) => ({ ...prevstate, todos: newTodos }));
  };
  handleClearCompleted = () => {
    let newTodos = this.state.todos;
    newTodos.forEach((todo) => {
      if (todo.completed) {
        todo.completed = false;
      }
    });
    this.setState((prestate) => ({ ...prestate, todos: newTodos }));
  };
  render() {
    let todosToShow = this.state.todos.filter((todo) => !todo.completed);
    return (
      <>
        <h1>Todolist</h1>
        <input value={this.state.todo} onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>submit</button>
        <p>
          {todosToShow.length} remaining{" "}
          <span>
            <button onClick={this.handleClearCompleted}>
              clear completed todos
            </button>
          </span>
        </p>

        <ul>
          {todosToShow.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.handleCompleted(todo.id)}
              ></input>
              {todo.title}{" "}
              <button onClick={() => this.handleDelete(todo.id)}>delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
