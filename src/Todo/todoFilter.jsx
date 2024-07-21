import React from "react";
import { Button } from "../components/ui/button";

const TodoFilter = ({ filterType,onChangefilterType }) => {
  return (
    <div className=" w-full flex">
      <Button
        variant={filterType === "all" ? "default" : "secondary"}
        onClick={() => onChangefilterType("all")}
        className="flex-1  rounded-none"
      >
        All
      </Button>
      <Button
        variant={filterType === "pending" ? "default" : "secondary"}
        onClick={() => onChangefilterType("pending")}
        className="flex-1  rounded-none"
      >
        Pending
      </Button>
      <Button
        variant={filterType === "completed" ? "default" : "secondary"}
        onClick={() => onChangefilterType("completed")}

        className="flex-1  rounded-none"
      >
        Completed
      </Button>
    </div>
  );
};

export default TodoFilter;
