import { deleteTask } from "../service/taskApi";
import Button from "./Button";

const OneTask = ({ label, id }: { label: string; id: number }) => {
  const deleteThis = async () => {
    await deleteTask(id);
  };
  return (
    <div className="flex justify-between my-2 bg-white items-center shadow-md rounded-lg px-5 py-4">
      <h1>{label}</h1>
      <div className="flex space-x-5">
        <Button label="Delete" onClick={deleteThis} />
      </div>
    </div>
  );
};

export default OneTask;
