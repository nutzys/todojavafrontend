import axios from "axios";

export const getAllTasks = async () => {
  return await axios.get("http://localhost:8080/api/tasks").then((res) => {
    return res.data;
  });
};

export const createTask = async (title: string) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const data = {
    title: title,
  };
  return await axios
    .post(`http://localhost:8080/api/tasks/create`, data, { headers: headers })
    .then((res) => res.data);
};

export const deleteTask = async (id: number) => {
  return await axios
    .delete(`http://localhost:8080/api/tasks/delete/${id}`)
    .then((res) => res.data);
};
