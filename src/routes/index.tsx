import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../context/User";
import About from "../views/About";
import Details from "../views/Details";
import Home from "../views/Home";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import Profile from "../views/Profile";
import RegisterCompany from "../views/RegisterCompany";
import Search from "../views/Search";
import Settings from "../views/Settings";
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
