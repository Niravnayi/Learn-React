import React from 'react'

const TodoFilter = ({filterType,changeFiltertype}) => {
  return (
    <div className="w-full flex">
    <button
      type="button"
      className="btn rounded-none flex-1"
      style={{
        backgroundColor: filterType === "all" ? "orange" : "blue",
      }}
      onClick={() => changeFiltertype("all")}
    >
      All
    </button>
    <button
      type="button"
      className="btn rounded-none flex-1"
      style={{
        backgroundColor: filterType === "pending" ? "orange" : "blue",
      }}
      onClick={() => changeFiltertype("pending")}
    >
      Pending
    </button>
    <button
      type="button"
      className="btn rounded-none flex-1"
      style={{
        backgroundColor: filterType === "completed" ? "orange" : "blue",
      }}
      onClick={() => changeFiltertype("completed")}
    >
      Completed
    </button>
  </div>
  )
}

export default TodoFilter