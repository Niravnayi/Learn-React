import React from "react";
import TodoItem from "./todoItem";

const TodoList = ({ todoList, updateTodo, deleteTodo, status }) => {
  console.log("todo list");
  return (
    <ul className="w-full m-0 p-0 flex-1 overflow-auto">
      {todoList.map((item, i) => {
        const deletestatus = status.find(x =>  x.id ===item.id);
        const updatestatus = status.find(x =>  x.id ===item.id);

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
              status={deletestatus}
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
