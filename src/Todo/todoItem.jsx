import React, { PureComponent, createRef } from "react";
import { Trash, Edit, Check } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { cn } from "../lib/utils";
import { Input } from "../components/ui/input";

export default class TodoItem extends PureComponent {
  state = {
    isUpdating: false,
  };

  editInput = createRef();

  toggleUpdating = () => {
    this.setState(
      ({ isUpdating }) => {
        return { isUpdating: !isUpdating };
      },
      () => {
        const { text } = this.props.item;
        const { isUpdating } = this.state;
        if (this.editInput.current) {
          this.editInput.current.value = isUpdating ? text : "";
        }
      }
    );
  };

  render() {
    console.log("todo item");
    const { item, updateTodo, deleteTodo } = this.props;
    const { isUpdating } = this.state;
    return (
      <li className="list-none" key={item.id}>
        <div className="flex items-center gap-4">
          <div>
            <Checkbox
              id="isDone"
              checked={item.isDone}
              onCheckedChange={() =>
                updateTodo({ ...item, isDone: !item.isDone })
              }
            />
            <label htmlFor="isDone" className="sr-only">
              is Done
            </label>
          </div>
          {isUpdating ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateTodo({ ...item, text: this.editInput.current.value });
                this.toggleUpdating();
              }}
              className="flex flex-1 gap-4"
            >
              <Input type="text" ref={this.editInput} />
              <Button size="icon" type="submit">
                <Check className="h-4 w-4" />
              </Button>
            </form>
          ) : (
            <div className="flex flex-1 gap-4">
              <p
                className={cn("!m-0 flex-1 line-clamp-3", {
                  "line-through": item.isDone,
                })}
              >
                {item.text}
              </p>
              <Button size="icon" onClick={this.toggleUpdating}>
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          )}
          <Button size="icon" onClick={() => deleteTodo(item)}>
            <Trash className="h-4 w-4" />
          </Button>
        </div>
        <Separator className="my-4" />
      </li>
    );
  }
}
