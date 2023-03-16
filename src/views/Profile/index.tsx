import { useContext } from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo2 from "../../assets/logo-3.png";
import ModalEdit from "../../components/ModalEdit";
import { AuthContext } from "../../context/User";
import EditProfile from "../img/edit.svg";
import {
  AboutMe,
  ContainerProfile,
  ContentEdit,
  Header,
  HistoricTravel,
  ImagemDiv,
  LikeTravel,
  LogoProfile,
  PageProfile,
  Photo,
  PhotoName,
  ProfileLeft,
  ProfileRight,
  RedeSocialAbout,
} from "./styles";
export default function Profile() {
  const { loggedUser } = useContext(AuthContext) as any;
  // const loggedUser = null;
  return (
    <PageProfile>
      <Header>
        <LogoProfile>
          <Link to="/">
            <img src={logo2} width="100px" alt="VSL-logo" />
          </Link>
        </LogoProfile>
      </Header>

      <ContainerProfile>
        <ProfileLeft>
          <Photo>
            <ImagemDiv>
              <label htmlFor="#">
                <input type="file" accept="image/*" />
              </label>
              <img
                src={
                  loggedUser
                    ? loggedUser?.picture
                    : "https://picsum.photos/id/1005/200/300"
                }
                alt="Sua imagem de perfil."
              />
            </ImagemDiv>

            <PhotoName>
              <h2>{loggedUser?.name}</h2>
            </PhotoName>
          </Photo>

          <LikeTravel>
            <h3>Recomendado por {loggedUser?.name}.</h3>
            <div>
              <h4>Copacabana Palace</h4>
              <img
                src="https://picsum.photos/id/1031/200/300"
                alt="imagem do hotel"
              />
            </div>
            <div>
              <h4>Emiliano Hotel</h4>
              <img
                src="https://picsum.photos/id/1029/200/300"
                alt="imagem do hotel"
              />
            </div>
            <div>
              <h4>Villa de Trancoso Hotel</h4>
              <img
                src="https://picsum.photos/id/122/200/300"
                alt="imagem do hotel"
              />
            </div>
          </LikeTravel>
        </ProfileLeft>
        <ProfileRight>
          <AboutMe>
            <h3>Sobre mim</h3>
            <button type="button">
              <FiEdit />
            </button>

            <ContentEdit>
              <p>Sou uma pessoa que sou apoixonada por viajar!!</p>
            </ContentEdit>

            <RedeSocialAbout>
              <label>
                <a href="#">
                  <AiFillInstagram />
                  <span>Instagram</span>
                </a>
              </label>
              <label>
                <a href="#">
                  <AiFillFacebook />
                  <span>Facebook</span>
                </a>
              </label>
            </RedeSocialAbout>
          </AboutMe>

          <HistoricTravel>
            <h3>Historico de Viagem</h3>
          </HistoricTravel>
        </ProfileRight>
      </ContainerProfile>

      <ModalEdit />
    </PageProfile>
  );
}
