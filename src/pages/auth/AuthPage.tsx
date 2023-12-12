import React, { useContext } from "react";
import Field from "../../components/Field";
import Button from "../../components/Button";
import AuthContext from "../../store/AuthContext";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";

const AuthPage = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center h-screen">
      {authCtx.isLogin ? <Login /> : <Register />}
    </div>
  );
};

export default AuthPage;
