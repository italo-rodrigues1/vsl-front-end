import { AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineStickyNote2, MdTune } from "react-icons/md";
import { RiMoonClearLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { ContainerMenu, Ul } from "./styles";

export default function Menu() {
  const darkMode = localStorage.getItem("darkMode");

  const handleDarkMode = () => {
    if (darkMode === "light") {
      localStorage.setItem("darkMode", "dark");
    } else {
      localStorage.setItem("darkMode", "light");
    }
    window.location.reload();
  };
  const handleLogout = () => {
    try {
      const res = api.get("/api/user/logout");
      console.log(res);
    } catch (err) {
      console.log("Failed to log out ", err);
    }
  };
  return (
    <ContainerMenu>
      <Ul>
        <Link to="/profile">
          <li>
            <AiOutlineUser />
            Perfil
          </li>
        </Link>
        <Link to="/about">
          <li>
            <MdOutlineStickyNote2 />
            Sobre
          </li>
        </Link>
        <Link to="">
          <li>
            <IoMdNotificationsOutline />
            Notificação
          </li>
        </Link>
        <Link to="/settings">
          <li>
            <MdTune />
            Configuração
          </li>
        </Link>
        <button type="submit" onClick={handleLogout}>
          <li>
            <AiOutlineLogin />
            Sair
          </li>
        </button>

        <button type="button" onClick={handleDarkMode}>
          {darkMode === "light" ? <BsSun /> : <RiMoonClearLine />}
        </button>
      </Ul>
    </ContainerMenu>
  );
}
