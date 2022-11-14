import React, { Component } from "react";
import Todos from "./todos";
import Filters from "./filters";
import NewTodo from "./newTodo";

let id_seed = 4;
export default class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: "todo1", completed: true, id: 1 },
        { title: "todo2", completed: false, id: 2 },
        { title: "todo3", completed: false, id: 3 },
      ],
      input: "test",
      filter: "all",
    };
  }
  handleInput = (value) => {
    this.setState({ ...this.state, input: value });
  };
  handleSubmit = () => {
    const newTodo = {
      title: this.state.input,
      completed: false,
      id: id_seed++,
    };
    const newTods = [...this.state.todos];
    newTods.push(newTodo);
    this.setState({ ...this.state, todos: newTods });
  };
  handleChecked = (id) => {
    const updateTodo = this.state.todos.filter((todo) => todo.id === id);
    updateTodo[0].completed = !updateTodo[0].completed;
    //updateTodo is an array with one todo object because filter return an array
    this.setState({ ...this.state });
  };
  handleFilter = (name) => {
    this.setState({ ...this.state, filter: name });
  };
  handleDelete = (index) => {
    const newTodos = this.state.todos.filter((todo, idx) => idx !== index);
    this.setState({ ...this.state, todos: newTodos });
  };
  render() {
    return (
      <>
        <h2>Todolist</h2>
        <NewTodo
          value={this.state.input}
          handleChange={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <Todos
          todos={this.state.todos}
          value={this.state.input}
          onChecked={this.handleChecked}
          onClick={this.handleDelete}
          filter={this.state.filter}
        />
        <Filters filter={this.state.filter} onClick={this.handleFilter} />
      </>
    );
  }
}
