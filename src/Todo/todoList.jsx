import React from "react";
import TodoItem from "./todoItem";

const TodoList = ({ todoList, updateTodo, deleteTodo }) => {
  console.log("todo list");
  return (
    <ul className="w-full">
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
