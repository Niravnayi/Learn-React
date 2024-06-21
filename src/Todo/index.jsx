import React, { Component } from 'react'

export default class Todo extends Component {
    state = {
        todoList: [],
        todoText: "",
    };

    changeText = (event) => {
        this.setState({ todoText: event.target.value })
    };

    addTodo = (event) => {
        event.preventDefault();
        this.setState(({ todoText, todoList }) => {
            return {
                todoList: [...todoList, { todoText, isDone: false, id: new Date().valueOf() }],
                todoText: "",
            }
        })
    }

    updateTodo = (item) => {
        this.setState(({ todoList }) => {
            const index = todoList.findIndex((x) => x.id === item.id);
            return {
                todoList: [...todoList.slice(0, index), { ...todoList[index], isDone: !todoList[index].isDone }, ...todoList.slice(index + 1)]
            }
        })
    }

    deleteTodo = (item) => {
        this.setState(({ todoList }) => {
            const index = todoList.findIndex((x) => x.id === item.id)

            return {
                todoList: [
                    ...todoList.slice(0, index), ...todoList.slice(index + 1)
                ]
            }
        })
    }


    render() {
        const { todoList, todoText } = this.state;
        return (
            <div className="flex flex-col items-center h-screen overflow-hidden">
                <h1 className="text-4xl font-semibold my-6">Todo App</h1>
                {/* form */}
                <form className="flex" onSubmit={this.addTodo}>
                    <div>
                        <label htmlFor="todoText" className="sr-only">Enter your todo</label>
                        <input className="rounded-l-md" type="text" id="todoText" placeholder="Enter your todo here..."
                            value={todoText}
                            onChange={this.changeText}
                            required
                        />
                    </div>
                    <button type="submit" className="btn rounded-l-none"
                    >Add Todo</button>
                </form>
                {/* list */}
                <div className="flex flex-1 flex-col gap-4 w-full p-6 overflow-auto  ">
                    {todoList.map((item, index) => {
                        return (
                            <div className="flex items-center" key={item.id}>
                                <div>
                                    <label htmlFor="isCompleted" className="sr-only">Toggle Complete</label>
                                    <input type="checkbox" name="isCompleted" id="isCompleted" checked={item.isDone}
                                        onChange={() => this.updateTodo(item)}
                                    />
                                </div>
                                <p className="px-6 flex-1 line-clamp-2">{item.todoText}</p>
                                <button className="btn"
                                    onClick={() => this.deleteTodo(item)}
                                >
                                    Delete</button>
                            </div>
                        )
                    })}


                </div>
                {/* filter type */}
                <div className=" w-full flex">
                    <button type="button" className="btn rounded-none flex-1">All </button>
                    <button type="button" className="btn rounded-none flex-1">Pending </button>
                    <button type="button" className="btn rounded-none flex-1">Complated </button>

                </div>
            </div>
        )
    }
}
