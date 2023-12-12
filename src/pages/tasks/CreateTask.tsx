import React from "react";
import Field from "../../components/Field";
import Button from "../../components/Button";

const CreateTask = () => {
  return (
    <div>
      <form>
        <Field label="Title" />
        <Button label="Create" />
      </form>
    </div>
  );
};

export default CreateTask;
