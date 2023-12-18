import Button from "../../components/Button";
import { useState } from "react";
import { createTask } from "../../service/taskApi";
import { Navigate, useNavigate } from "react-router-dom";

const CreateTask = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(input);
    await createTask(input);
    navigate("/tasks");
  };
  return (
    <div>
      <form method="POST">
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <Button label="Create" onClick={onSubmit} />
      </form>
    </div>
  );
};

export default CreateTask;
