import React from "react";
import Task from "../components/Task";
import SingleProject from "../components/SingleProject";
import Button from "../components/Button";

const Tasks = () => {
  return (
    <div className="h-full flex flex-1 space-x-7">
      <div className="w-1/5 shadow-md flex flex-col bg-zinc-200 p-4 rounded-lg space-y-2">
        <SingleProject />
        <SingleProject />
        <SingleProject />
        <SingleProject />
        <SingleProject />
        <SingleProject />
      </div>
      <div className="flex flex-col w-full bg-zinc-200 rounded-lg shadow-md p-4">
        <div>
          <a href="tasks/create">Create Task</a>
        </div>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default Tasks;
