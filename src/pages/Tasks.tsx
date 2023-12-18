import React, { useContext, useEffect, useState } from "react";
import { Task } from "../model/task";
import OneTask from "../components/OneTask";
import { getAllTasks } from "../service/taskApi";

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllTasks();
      console.log(response);
      setTasks(response);
    };
    fetchData();
  }, []);
  return (
    <div className="h-full flex flex-1 space-x-7">
      <div className="flex flex-col w-full bg-zinc-200 rounded-lg shadow-md p-4">
        <div>
          <a href="tasks/create">Create Task</a>
        </div>
        {tasks.map((task, index) => {
          return <OneTask key={index} label={task.title} id={task.id} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;
