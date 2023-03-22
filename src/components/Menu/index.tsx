import { useContext } from "react";
import { AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineStickyNote2, MdTune } from "react-icons/md";
import { RiMoonClearLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/User";
import { ButtonDarkMode, ButtonExit, ContainerMenu, Ul } from "./styles";

export default function Menu() {
  const darkMode = localStorage.getItem("darkMode");
  const { handleLogout } = useContext(AuthContext);

  const handleDarkMode = () => {
    if (darkMode === "light") {
      localStorage.setItem("darkMode", "dark");
    } else {
      localStorage.setItem("darkMode", "light");
    }
    window.location.reload();
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
        <ButtonExit type="button" onClick={handleLogout}>
          <AiOutlineLogin />
          Sair
        </ButtonExit>

        <ButtonDarkMode
          type="button"
          onClick={handleDarkMode}
          backgroundColor={darkMode === "light" ? "white" : "black"}
        >
          {darkMode === "light" ? <BsSun /> : <RiMoonClearLine color="#fff" />}
        </ButtonDarkMode>
      </Ul>
    </ContainerMenu>
  );
}
