import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let item = {
      title: this.state.value,
      status: false,
      id: Date.now(),
    };

    this.setState({
      todos: [...this.state.todos, item],
    });
  };

  componentDidMount = () => {
    const data = [
      {
        title: "buy mango",
        status: false,
        id: 1,
      },
      {
        title: "buy milk",
        status: true,
        id: 2,
      },
    ];
    this.setState({
      todos: data,
    });
  };

  handleCheckbox = (e) => {
    const { id } = e.target;
    this.setState({
      todos: this.state.todos.map((item) =>
        item.id == id ? { ...item, status: !item.status } : item
      ),
    });
  };

  handleDelete = (e) => {
    const { id } = e.target;
    console.log(id);
    this.setState({
      todos: this.state.todos.filter((ele) => "btn" + ele.id != id),
    });
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="container-fluid text-center">
          <header className="p-2">
            <h1>Tasks</h1>
            <TaskForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              value={this.state.value}
            />
          </header>
          <section className="mt-2">
            <TaskList
              todos={this.state.todos}
              onChange={this.handleCheckbox}
              onDelete={this.handleDelete}
            />
          </section>
        </div>
      </Router>
    );
  }
}
