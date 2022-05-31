import {Navigate} from "react-router-dom";

export default function PrivateRoute({ children: children} : any) {
    const userLogger =  import.meta.env.VITE_USER_TEST
    return userLogger ? children  : <Navigate  to="/" />
}