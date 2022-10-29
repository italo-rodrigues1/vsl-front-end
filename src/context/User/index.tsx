import { createContext } from "react";
import useLogin from "../../hooks/User";

interface PropsUserContext {
  loginForm: any;
  loginGoogle: any;
  registerForm: any;
  name: any;
  setName: any;
  email: any;
  setEmail: any;
  password: any;
  setPassword: any;
  loggedUser: any;
}

const AuthContext = createContext<PropsUserContext | null>(null);

const AuthContextProvider = ({ children }: any) => {
  const {
    loginForm,
    loginGoogle,
    registerForm,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    loggedUser,
  } = useLogin();

  const userInfo: PropsUserContext = {
    loginForm,
    loginGoogle,
    registerForm,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    loggedUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
