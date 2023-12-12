import React from "react";
import Project from "../components/Project";
import Field from "../components/Field";
import Button from "../components/Button";

const Projects = () => {
  return (
    <div className="flex space-x-7">
      <div className="w-1/2 flex flex-col bg-zinc-200 shadow-md p-7 rounded-lg">
        <h1 className="text-3xl mb-5 text-gray-600">Projects</h1>
        <div className="space-y-4 overflow-y-auto">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
      <div className="w-1/2 h-fit flex flex-col bg-zinc-200 shadow-md p-7 rounded-lg">
        <h1 className="text-3xl mb-5 text-gray-600">New project</h1>
        <form>
          <Field label="Title" />
          <Field label="Description" />
          <div className="mt-5">
            <Button label="Create Project" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Projects;
