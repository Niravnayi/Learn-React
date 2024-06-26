import React from 'react'

const TodoForm = ({todoText,changeText,addTodo}) => {
  return (
    <form className="flex" onSubmit={addTodo}>
    <div>
      <label htmlFor="todoText" className="sr-only">
        Todo Text
      </label>
      <input
        type="text"
        id="todoText"
        placeholder="Enter your todo here..."
        className="rounded-l-md"
        value={todoText}
        onChange={changeText}
        required
      />
    </div>
    <button type="submit" className="btn rounded-l-none">
      Add Todo
    </button>
  </form>
  )
}

export default TodoForm