import { Route, Routes } from "react-router-dom";
import TaskLayout from "./TaskLayout";
import Tasks from "./pages/Tasks";
import CreateTask from "./pages/tasks/CreateTask";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TaskLayout />}>
          <Route path="tasks" index element={<Tasks />} />
          <Route path="tasks/create" element={<CreateTask />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
