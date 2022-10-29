import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children: children }: any) {
  const userLogger = localStorage.getItem("Token");
  console.log("userLogger", userLogger);
  if (!userLogger) console.log("userLogger", userLogger);

  return userLogger ? children : <Navigate to="/" />;
}
