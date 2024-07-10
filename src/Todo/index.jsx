import React, { Component, createRef } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

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
          todoList: [...todoList, todoText],
        };
      },
      () => {
        // sync code
        todoTextRef.value = "";
      }
    );
  };

  render() {
    console.log("render");
    return (
      <div className="h-screen bg-slate-300 flex flex-col items-center p-4">
        <h1>Todo List</h1>

        <form className="flex m-5" onSubmit={this.addTodo}>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="todoText" className="sr-only">
              Todo Text
            </Label>
            <Input
              ref={this.todoText}
              type="text"
              id="todoText"
              placeholder="Enter your todo here.."
              className="rounded-r-none"
            />
          </div>
          <Button type="submit" className="rounded-l-none">
            Add Todo
          </Button>
        </form>
      </div>
    );
  }
}
