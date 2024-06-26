import React from 'react'

const TodoList = ({
    todoList,
    filterType,
    editedItem,
    updateTodo,
    updateItem,
    changeEditText,
    editItem,
    deleteTodo
}) => {
  return (
    <div className="flex flex-1 flex-col gap-4 w-full p-6 overflow-auto">
    {todoList
      // .filter((item) => {
      //   switch (filterType) {
      //     case "pending":
      //       return item.isDone === false;

      //     case "completed":
      //       return item.isDone === true;

      //     default:
      //       return true;
      //   }
      // })
      .map((item) => {
        if (
          filterType === "all" ||
          (filterType === "pending" && item.isDone === false) ||
          (filterType === "completed" && item.isDone === true)
        ) {
        //   console.log(editedItem.some((x) => x.id === item.id));
          return (
            <div className="flex items-center gap-4" key={item.id}>
              <div>
                <label htmlFor="isCompleted" className="sr-only">
                  Toggle Complete
                </label>
                <input
                  type="checkbox"
                  name="isCompleted"
                  id="isCompleted"
                  checked={item.isDone}
                  onChange={() => updateTodo(item)}
                />
              </div>
              {editedItem.some((x) => x.id === item.id) ? (
                <form className="flex flex-1"
                 onSubmit={(event) => updateItem(event,item)}>
                  <div className="flex-1">
                    <label htmlFor="editTodo" className="sr-only">
                      Edit Todo
                    </label>
                    <input
                      type="text"
                      id="editTodo"
                      value={item.todoText}
                      onChange={(event)=>changeEditText(event, item)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn"
                   
                  >
                    Update Value
                  </button>
                </form>
              ) : (
                <p className="flex-1 line-clamp-2">{item.todoText}</p>
              )}

              <button
                className="btn"
                onClick={() => editItem(item)}
              >
                Edit
              </button>
              <button
                className="btn"
                onClick={() => deleteTodo(item)}
              >
                Delete
              </button>
            </div>
          );
        }
        return null;
      })}
  </div>
  )
}

export default TodoList