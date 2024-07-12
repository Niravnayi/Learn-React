import React, { Component, createRef } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default class Todo extends Component {
  state = {
    todoList: [],
  };

  todoText = createRef();

  addTodo = (e) => {
    e.preventDefault();
    const todoTextRef = this.todoText.current;
    // async code
    this.setState(
      ({ todoList }) => {
        const todoText = todoTextRef.value;
        return {
          todoList: [
            ...todoList,
            { id: new Date().valueOf(), text: todoText, isDone: false },
          ],
        };
      },
      () => {
        // sync code
        todoTextRef.value = "";
      }
    );
  };

  render() {
    const { todoList } = this.state;
    return (
      <div className="h-screen bg-slate-300 flex flex-col items-center p-4">
        <h1>Todo List</h1>
        <TodoForm addTodo={this.addTodo} ref={this.todoText} />
        <TodoList todoList={todoList} />
      </div>
    );
  }
}
