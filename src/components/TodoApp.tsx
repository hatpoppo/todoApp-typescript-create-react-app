import React from "react";
import { TodoHeader } from "./TodoHeader";
import { TodoFooter } from "./TodoFooter";
import { TodoList } from "./TodoList";
import { FileTypes, Todos } from "../TodoApp.types";
import { Stack } from "office-ui-fabric-react";
let index = 0;

export class TodoApp extends React.Component<{}, { todos: Todos; filter: FileTypes }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: {},
      filter: "all"
    };
  }
  render() {
    const { filter, todos } = this.state;
    return (
      <Stack horizontalAlign="center">
        <Stack style={{ width: 400 }} gap={25}>
          <TodoHeader addTodo={this._addTodo} setFilter={this._filter} filter={filter}></TodoHeader>
          <TodoList todos={todos} filter={filter} complete={this._complete} edit={this._edit} remove={this._remove}></TodoList>
          <TodoFooter clear={this._clear} todos={todos}></TodoFooter>
        </Stack>
      </Stack>
    );
  }
  private _clear = () => {
    const { todos } = this.state;
    const newTodos: Todos = {};
    Object.keys(this.state.todos).forEach(id => {
      if (todos[id].completed) {
        newTodos[id] = todos[id];
      }
    });
    this.setState({
      todos: newTodos
    });
  };
  private _addTodo = label => {
    const { todos } = this.state;
    const id = index++;
    this.setState({
      todos: { ...todos, [id]: { label, completed: false } }
    });
  };
  private _filter = filter => {
    this.setState({
      filter: filter
    });
  };
  private _complete = id => {
    const { todos } = this.state;
    const todo = todos[id];
    const newTodos = { ...todos, [id]: { ...todo, completed: !todo.completed } };
    this.setState({
      todos: newTodos
    });
  };
  private _edit = (id, label) => {
    const newTodos = { ...this.state.todos };
    newTodos[id] = { ...newTodos[id], label };
    this.setState({
      todos: newTodos
    });
  };
  private _remove = id => {
    const newTodos = { ...this.state.todos };
    delete newTodos[id];
    this.setState({
      todos: newTodos
    });
  };
}