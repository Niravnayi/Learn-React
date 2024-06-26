import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./todoList";
import TodoFilter from "./todoFilter";

export default class Todo extends Component {
  state = {
    todoList: [],
    todoText: "",
    filterType: "all",
    editedItem: [],
  };

  changeText = (event) => {
    this.setState({ todoText: event.target.value });
  };

  addTodo = (event) => {
    event.preventDefault();

    this.setState(({ todoText, todoList }) => {
      return {
        todoList: [
          ...todoList,
          { todoText, isDone: false, id: new Date().valueOf() },
        ],
        todoText: "",
      };
    });
  };

  updateTodo = (item) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          {
            ...todoList[index],
            isDone: !todoList[index].isDone,
          },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = (item) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);

      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  changeEditText =(event,item) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex(
        (x) => x.id === item.id
      );
      return {
        todoList: [
          ...todoList.slice(0, index),
          {
            ...todoList[index],
            todoText: event.target.value,
          },
          ...todoList.slice(index + 1),
        ],
      };
    });
  }

  updateItem =  (event,item) => {
    event.preventDefault();

    this.setState(({ editedItem }) => {
      const index = editedItem.findIndex(
        (x) => x.id === item.id
      );
      return {
        editedItem: [
          ...editedItem.slice(0, index),
          ...editedItem.slice(index + 1),
        ],
      };
    });
  }
  editItem = (item) => {
    this.setState(({ editedItem }) => {
      return {
        editedItem: [...editedItem, item],
      };
    });
  }
  changeFiltertype = (filterType) => {
    this.setState({filterType})
  }

  render() {
    const { todoList, todoText, filterType, editedItem } = this.state;

    return (
      <div className="flex flex-col items-center h-screen overflow-hidden">
        <h1 className="text-4xl font-semibold my-6">Todo App</h1>
        {/* form */}
       <TodoForm 
       todoText={todoText}
       changeText={this.changeText}
       addTodo={this.addTodo}
        />
        {/* list */}
     <TodoList 
      todoList={todoList}
      filterType={filterType}
      editedItem={editedItem}
      updateItem={this.updateItem}
      updateTodo={this.updateTodo}
      changeEditText={this.changeEditText}
      editItem={this.editItem}
      deleteTodo={this.deleteTodo}
     />
        {/* filter type */}
       <TodoFilter 
       filterType={filterType}
       changeFiltertype={this.changeFiltertype}
       />
      </div>
    );
  }
}
