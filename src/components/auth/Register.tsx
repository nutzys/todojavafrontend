import React, { useContext } from "react";
import AuthContext from "../../store/AuthContext";
import Field from "../Field";
import Button from "../Button";

const Register = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className="bg-zinc-200 shadow-md rounded-lg w-96 p-4">
      <h1 className="text-3xl text-center">Welcome</h1>
      <div className="mb-4">
        <form>
          <Field label="Full Name" />
          <Field label="Email" />
          <Field label="Password" />
          <Field label="Confirm Password" />
          <Button label="Register" />
        </form>
      </div>
      <div className="flex justify-evenly">
        <p className="text-gray-400">Already a user ?</p>
        <a
          onClick={() => authCtx.setAuth()}
          className="text-blue-600 hover:underline"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Register;
