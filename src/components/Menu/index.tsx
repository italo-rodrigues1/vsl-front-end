import { AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { RiMoonClearLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineStickyNote2, MdTune } from "react-icons/md";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <li>
            <AiOutlineLogin />
            Sair
          </li>
        </Link>

        <button type="button" onClick={handleDarkMode}>
          {darkMode === "light" ? <BsSun /> : <RiMoonClearLine />}
        </button>
      </Ul>
    </ContainerMenu>
  );
}
