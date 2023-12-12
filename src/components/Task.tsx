import React from "react";
import Button from "./Button";

const Task = () => {
  return (
    <div className="flex justify-between my-2 bg-white items-center shadow-md rounded-lg px-5 py-4">
      <h1>Task</h1>
      <span>Priority</span>
      <div className="flex space-x-5">
        <Button label="Delete" />
        <Button label="Edit" />
      </div>
    </div>
  );
};

export default Task;
