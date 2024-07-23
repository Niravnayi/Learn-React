import React, { Component, createRef } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import TodoFilter from "./todoFilter";

export default class Todo extends Component {
  state = {
    todoList: [],
    filterType: "all",
    status: [],
  };

  todoText = createRef();

  componentDidMount() {
    this.loadTodo("all");
  }

  loadTodo = async (filterType) => {
    const currentState = "LOAD_TODO";
    try {
      this.setState(({ status }, props) => {
        return {
          status: [
            ...status,
            {
              state: currentState,
              status: "loading",
              message: "Todo List is loading... ",
            },
          ],
        };
      });

      let url = "http://localhost:3000/todoList";
      if (filterType !== "all") {
        url += `?isDone=${filterType === "completed"}`;
      }

      const res = await fetch(url);
      const json = await res.json();
      this.setState({ todoList: json, filterType });
    } catch (error) {
    } finally {
      this.setState(({ status }, props) => {
        const index = status.findIndex((x) => x.state === currentState);
        return {
          status: [...status.slice(0, index), ...status.slice(index + 1)],
        };
      });
    }
  };

  addTodo = async (e) => {
    const currentState = "ADD_TODO";

    try {
      e.preventDefault();
      this.setState(({ status }, props) => {
        return {
          status: [
            ...status,
            {
              state: currentState,
              status: "loading",
              message: "Todo List is loading... ",
            },
          ],
        };
      });

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
    } catch (error) {
    } finally {
      this.setState(({ status }, props) => {
        const index = status.findIndex((x) => x.state === currentState);
        return {
          status: [...status.slice(0, index), ...status.slice(index + 1)],
        };
      });
    }
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
    const currentState = "DELETE_TODO";

    try {
      this.setState(({ status }, props) => {
        return {
          status: [
            ...status,
            {
              id:item.id,
              state: currentState,
              status: "loading",
              message: "Todo List is loading... ",
            },
          ],
        };
      });

      await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: "DELETE",
      });

      this.setState(({ todoList }) => {
        const index = todoList.findIndex((x) => x.id === item.id);
        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });
    } catch (error) {
    } finally {
      this.setState(({ status }, props) => {
        const index = status.findIndex((x) => x.state === currentState && x.id === item.id);
        return {
          status: [...status.slice(0, index), ...status.slice(index + 1)],
        };
      });
    }
  };

  onChangefilterType = (filterType) => {
    this.setState({ filterType });
  };

  render() {
    const { todoList, filterType, status } = this.state;

    const loadTodo = status.find((x) => x.state === "LOAD_TODO");
    const addTodo = status.find((x) => x.state === "ADD_TODO");
    const deleteTodo = status.filter((x) => x.state === "DELETE_TODO");

    return (
      <div className="h-screen bg-slate-300 flex flex-col items-center">
        <h1 className="my-4">Todo List</h1>
        <TodoForm addTodo={this.addTodo} ref={this.todoText} status={addTodo} />
        {loadTodo?.status === "loading" ? (
          <div className="flex-1 m-4 items-center">
            <h1>{loadTodo.message}</h1>
          </div>
        ) : (
          <TodoList
            todoList={todoList}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
            filterType={filterType}
            status={deleteTodo}
          />
        )}
        <TodoFilter
          filterType={filterType}
          onChangefilterType={this.loadTodo}
        />
      </div>
    );
  }
}
