import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../context/User";
import RegisterCompany from "../views/Company/RegisterCompany";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import About from "../views/User/About";
import Details from "../views/User/Details";
import Login from "../views/User/Login";
import Profile from "../views/User/Profile";
import Search from "../views/User/Search";
import Settings from "../views/User/Settings";
import PrivateRoute from "./authRoute";

const RoutesViews = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/register/company" element={<RegisterCompany />} />

        <Route
          path="/search"
          element={
            <PrivateRoute>
              <Search />
            </PrivateRoute>
          }
        />
        <Route
          path="/details/:id"
          element={
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              {" "}
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default RoutesViews;
