import { Routes,Route } from "react-router-dom"
import Home from '../views/Home';
import Login from '../views/Login';
import Search from '../views/Search';
import Details from '../views/Details';
import Profile from '../views/Profile';
import Settings from "../views/Settings";
import About from "../views/About";
import RegisterCompany from "../views/RegisterCompany";
import NotFound from "../views/NotFound";
import PrivateRoute from './authRoute';

const RoutesViews = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register/company" element={<RegisterCompany />} />
      <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>} />
      <Route path="/search" element={<PrivateRoute><Search /></PrivateRoute>} />
      <Route path="/details" element={<PrivateRoute><Details /></PrivateRoute>} />
      <Route path="/about" element={<PrivateRoute><About /></PrivateRoute> } />
      <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute> } />
      <Route path="/profile" element={<PrivateRoute> <Profile /></PrivateRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesViews;
