import { Route, Routes } from "react-router-dom";
import TaskLayout from "./TaskLayout";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";
import AuthPage from "./pages/auth/AuthPage";
import CreateTask from "./pages/tasks/CreateTask";

function App() {
  return (
    <>
      <Routes>
        <Route path="auth" element={<AuthPage />} />
        <Route path="/" element={<TaskLayout />}>
          <Route path="projects" element={<Projects />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="tasks/create" element={<CreateTask />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
