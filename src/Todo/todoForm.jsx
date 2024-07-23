import React, { forwardRef } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const TodoForm = forwardRef(({ addTodo, status }, ref) => {
  return (
    <form className="flex m-5" onSubmit={addTodo}>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="todoText" className="sr-only">
          Todo Text
        </Label>
        <Input
          ref={ref}
          type="text"
          id="todoText"
          placeholder="Enter your todo here.."
          className="rounded-r-none"
          required
        />
      </div>
      <Button
        disabled={status?.status === "loading"}
        type="submit"
        className="rounded-l-none"
      >
        Add Todo
      </Button>
    </form>
  );
});

TodoForm.displayName = "TodoForm";

export default TodoForm;
