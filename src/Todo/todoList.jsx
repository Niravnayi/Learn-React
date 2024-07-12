import React from "react";
import { Trash } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";

const TodoList = ({ todoList }) => {
  return (
    <ul className="w-full">
      {todoList.map((item) => (
        <li className="list-none" key={item.id}>
          <div className="flex items-center gap-4">
            <div>
              <Checkbox id="isDone" />
              <label htmlFor="isDone" className="sr-only">
                is Done
              </label>
            </div>
            <p className="!m-0 flex-1 line-clamp-3">{item.text}</p>
            <Button size="icon">
              <Trash className="h-4 w-4" />
            </Button>
          </div>
          <Separator className="my-4" />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
