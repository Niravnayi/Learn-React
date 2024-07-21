import React, { Component, createRef } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import TodoFilter from "./todoFilter";

export default class Todo extends Component {
  state = {
    todoList: [],
    filterType: "all",
  };

  todoText = createRef();

  componentDidMount() {
    this.loadTodo("all");
  }

  loadTodo = async (filterType) => {
    try {
      let url = "http://localhost:3000/todoList";
      if (filterType !== "all") {
        url += `?isDone=${filterType === "completed"}`;
      }

      const res = await fetch(url);
      const json = await res.json();
      this.setState({ todoList: json, filterType });
    } catch (error) {}
  };

  addTodo = async (e) => {
    try {
      e.preventDefault();

      const todoTextRef = this.todoText.current;

      const res = await fetch("http://localhost:3000/todoList", {
        method: "POST",
        body: JSON.stringify({ text: todoTextRef.value, isDone: false }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await res.json();
      // async code
      this.setState(
        ({ todoList }) => {
          return {
            todoList: [...todoList, json],
          };
        },
        () => {
          // sync code
          todoTextRef.value = "";
        }
      );
    } catch (error) {}
  };

  updateTodo = async (item) => {
    try {
      const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const json = await res.json();

      this.setState(({ todoList }) => {
        const index = todoList.findIndex((x) => x.id === item.id);
        return {
          todoList: [
            ...todoList.slice(0, index),
            json,
            ...todoList.slice(index + 1),
          ],
        };
      });
    } catch (error) {}
  };

  deleteTodo = async (item) => {
    try {
      await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: "DELETE",
      });

      this.setState(({ todoList }) => {
        const index = todoList.findIndex((x) => x.id === item.id);
        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });
    } catch (error) {}
  };

  onChangefilterType = (filterType) => {
    this.setState({ filterType });
  };

  render() {
    const { todoList, filterType } = this.state;
    return (
      <div className="h-screen bg-slate-300 flex flex-col items-center ">
        <h1 className=" m-4">Todo List</h1>
        <TodoForm addTodo={this.addTodo} ref={this.todoText} />
        <TodoList
          todoList={todoList}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
          filterType={filterType}
        />
        <TodoFilter
          filterType={filterType}
          onChangefilterType={this.loadTodo}
        />
      </div>
    );
  }
}
