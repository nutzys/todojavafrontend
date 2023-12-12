import React from "react";
import Button from "./Button";

const Project = () => {
  return (
    <div className="h-16 flex items-center bg-white rounded-lg px-7 justify-between">
      <h1>Project</h1>
      <div className="flex space-x-5">
        <Button label="Delete" />
        <Button label="Update" />
      </div>
    </div>
  );
};

export default Project;
