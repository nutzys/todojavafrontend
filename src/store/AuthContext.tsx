import { createContext, useState } from "react";

interface ContextType {
  isLogin: boolean;
  setAuth: () => void;
}

const AuthContext = createContext<ContextType>({
  isLogin: true,
  setAuth: () => {},
});

export const AuthContextProvider = ({ children }: { children: any }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const setAuth = () => {
    setIsLogin(!isLogin);
  };

  const value = {
    isLogin: isLogin,
    setAuth: setAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
