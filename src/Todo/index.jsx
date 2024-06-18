import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div className="flex flex-col items-center h-screen overflow-hidden">
                <h1 className="text-4xl font-semibold my-6">Todo App</h1>
                {/* form */}
                <form className="flex">
                    <div>
                        <label htmlFor="todoText" className="sr-only">Enter your todo</label>
                        <input className="rounded-l-md" type="text" id="todoText" placeholder="Enter your todo here..." />
                    </div>
                    <button type="submit" className="btn rounded-l-none"
                    >Add Todo</button>
                </form>
                {/* list */}
                <div className="flex flex-1 flex-col gap-4 w-full p-6 overflow-auto  ">
                    {/* item 1 */}
                <div className="flex items-center">
                    <div>
                        <label htmlFor="isCompleted" className="sr-only">Toggle Complete</label>
                        <input type="checkbox" name="isCompleted" id="isCompleted" />
                    </div>
                    <p className="px-6 flex-1 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam?</p>
                    <button className="btn">Delete</button>
                </div>
                    {/* item 2 */}
                <div className="flex items-center">
                    <div>
                        <label htmlFor="isCompleted" className="sr-only">Toggle Complete</label>
                        <input type="checkbox" name="isCompleted" id="isCompleted" />
                    </div>
                    <p className="px-6 flex-1 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aperiam?</p>
                    <button className="btn">Delete</button>
                </div>
                    {/* item 3 */}
                <div className="flex items-center">
                    <div>
                        <label htmlFor="isCompleted" className="sr-only">Toggle Complete</label>
                        <input type="checkbox" name="isCompleted" id="isCompleted" />
                    </div>
                    <p className="px-6 flex-1 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nobis esse voluptate voluptas illo vitae expedita vero ratione ea ad est aut, quibusdam blanditiis quos quia fuga dolore in debitis.</p>
                    <button className="btn">Delete</button>
                </div>
                 {/* item 4 */}
                 <div className="flex items-center">
                    <div>
                        <label htmlFor="isCompleted" className="sr-only">Toggle Complete</label>
                        <input type="checkbox" name="isCompleted" id="isCompleted" />
                    </div>
                    <p className="px-6 flex-1 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nobis esse voluptate voluptas illo vitae expedita vero ratione ea ad est aut, quibusdam blanditiis quos quia fuga dolore in debitis.</p>
                    <button className="btn">Delete</button>
                </div>
                 {/* item 5 */}
                 <div className="flex items-center">
                    <div>
                        <label htmlFor="isCompleted" className="sr-only">Toggle Complete</label>
                        <input type="checkbox" name="isCompleted" id="isCompleted" />
                    </div>
                    <p className="px-6 flex-1 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nobis esse voluptate voluptas illo vitae expedita vero ratione ea ad est aut, quibusdam blanditiis quos quia fuga dolore in debitis.</p>
                    <button className="btn">Delete</button>
                </div>
                 {/* item 6 */}
                 <div className="flex items-center">
                    <div>
                        <label htmlFor="isCompleted" className="sr-only">Toggle Complete</label>
                        <input type="checkbox" name="isCompleted" id="isCompleted" />
                    </div>
                    <p className="px-6 flex-1 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nobis esse voluptate voluptas illo vitae expedita vero ratione ea ad est aut, quibusdam blanditiis quos quia fuga dolore in debitis.</p>
                    <button className="btn">Delete</button>
                </div>
                 {/* item 7 */}
                 <div className="flex items-center">
                    <div>
                        <label htmlFor="isCompleted" className="sr-only">Toggle Complete</label>
                        <input type="checkbox" name="isCompleted" id="isCompleted" />
                    </div>
                    <p className="px-6 flex-1 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nobis esse voluptate voluptas illo vitae expedita vero ratione ea ad est aut, quibusdam blanditiis quos quia fuga dolore in debitis.</p>
                    <button className="btn">Delete</button>
                </div>
                 {/* item 8 */}
                 <div className="flex items-center">
                    <div>
                        <label htmlFor="isCompleted" className="sr-only">Toggle Complete</label>
                        <input type="checkbox" name="isCompleted" id="isCompleted" />
                    </div>
                    <p className="px-6 flex-1 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nobis esse voluptate voluptas illo vitae expedita vero ratione ea ad est aut, quibusdam blanditiis quos quia fuga dolore in debitis.</p>
                    <button className="btn">Delete</button>
                </div>
                 {/* item 9 */}
                 <div className="flex items-center">
                    <div>
                        <label htmlFor="isCompleted" className="sr-only">Toggle Complete</label>
                        <input type="checkbox" name="isCompleted" id="isCompleted" />
                    </div>
                    <p className="px-6 flex-1 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nobis esse voluptate voluptas illo vitae expedita vero ratione ea ad est aut, quibusdam blanditiis quos quia fuga dolore in debitis.</p>
                    <button className="btn">Delete</button>
                </div>
                 {/* item 10 */}
                 <div className="flex items-center">
                    <div>
                        <label htmlFor="isCompleted" className="sr-only">Toggle Complete</label>
                        <input type="checkbox" name="isCompleted" id="isCompleted" />
                    </div>
                    <p className="px-6 flex-1 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nobis esse voluptate voluptas illo vitae expedita vero ratione ea ad est aut, quibusdam blanditiis quos quia fuga dolore in debitis.</p>
                    <button className="btn">Delete</button>
                </div>
                 {/* item 11 */}
                 <div className="flex items-center">
                    <div>
                        <label htmlFor="isCompleted" className="sr-only">Toggle Complete</label>
                        <input type="checkbox" name="isCompleted" id="isCompleted" />
                    </div>
                    <p className="px-6 flex-1 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nobis esse voluptate voluptas illo vitae expedita vero ratione ea ad est aut, quibusdam blanditiis quos quia fuga dolore in debitis.</p>
                    <button className="btn">Delete</button>
                </div>
                 {/* item 12 */}
                 <div className="flex items-center">
                    <div>
                        <label htmlFor="isCompleted" className="sr-only">Toggle Complete</label>
                        <input type="checkbox" name="isCompleted" id="isCompleted" />
                    </div>
                    <p className="px-6 flex-1 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nobis esse voluptate voluptas illo vitae expedita vero ratione ea ad est aut, quibusdam blanditiis quos quia fuga dolore in debitis.</p>
                    <button className="btn">Delete</button>
                </div>
                 {/* item 13 */}
                 <div className="flex items-center">
                    <div>
                        <label htmlFor="isCompleted" className="sr-only">Toggle Complete</label>
                        <input type="checkbox" name="isCompleted" id="isCompleted" />
                    </div>
                    <p className="px-6 flex-1 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nobis esse voluptate voluptas illo vitae expedita vero ratione ea ad est aut, quibusdam blanditiis quos quia fuga dolore in debitis.</p>
                    <button className="btn">Delete</button>
                </div>


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
