import { Routes,Route } from "react-router-dom"
import Home from '../views/Home';
import Login from '../views/Login';
import Search from '../views/Search';
import Details from '../views/Details';
import Profile from '../views/Profile';
import Settings from "../views/Settings";
import About from "../views/About";
import RegisterCompany from "../views/RegisterCompany";


const RoutesViews = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register/company" element={<RegisterCompany />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/details" element={<Details />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default RoutesViews;
