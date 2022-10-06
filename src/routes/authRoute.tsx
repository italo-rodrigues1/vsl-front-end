import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children: children} : any) {
    const userLogger =  import.meta.env.VITE_USER_TEST

    if(!userLogger) console.log("userLogger", userLogger)
    
    return userLogger ? children  : <Navigate  to="/" />
}