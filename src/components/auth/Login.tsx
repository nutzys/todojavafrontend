import React, { useContext } from "react";
import AuthContext from "../../store/AuthContext";
import Field from "../Field";
import Button from "../Button";

const Login = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className="bg-zinc-200 shadow-md rounded-lg w-96 p-4">
      <h1 className="text-3xl text-center">Welcome</h1>
      <div className="mb-4">
        <form>
          <Field label="Email" />
          <Field label="Password" />
          <Button label="Login" />
        </form>
      </div>
      <div className="flex justify-evenly">
        <p className="text-gray-400">Not a user ?</p>
        <a
          onClick={() => authCtx.setAuth()}
          className="text-blue-600 hover:underline"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Login;
