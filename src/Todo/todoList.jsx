import React from "react";
import TodoItem from "./todoItem";

const TodoList = ({ todoList, updateTodo, deleteTodo, filterType }) => {
  console.log("todo list");
  return (
    <ul className="w-full m-0 p-0 flex-1 overflow-auto">
      {todoList.map((item, i) => {
        // if (
        //   filterType === "all" ||
        //   (filterType === "pending" && item.isDone === false) ||
        //   (filterType === "completed" && item.isDone === true)
        // ) {
          return (
            <TodoItem
              key={item.id}
              item={item}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              isLast={i + 1 === todoList.length}
            />
          );
        // }
        // return null;
      })}
    </ul>
  );
};

export default TodoList;
