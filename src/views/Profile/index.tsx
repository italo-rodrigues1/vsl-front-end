import { Link } from "react-router-dom";
import logo2 from '../../assets/logo-3.png';
import photoProfile from '../img/peopleProfile.jpg';
import hotelProfile from '../img/hotel-profile.webp';
import hotelProfile2 from '../img/hotel-profile-2.webp';
import hotelProfile3 from '../img/hotel-profile-3.jpg';
import EditProfile from '../img/edit.svg';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { 
  PageProfile, 
  Header, 
  ContainerProfile,
  Photo,
  ImagemDiv,
  LogoProfile,
  ProfileLeft,
  ProfileRight,
  PhotoName,
  LikeTravel,
  AboutMe,
  ContentEdit,
  RedeSocialAbout,
  HistoricTravel
} from './styles'
import ModalEdit from "../../components/ModalEdit";
export default function Profile() {

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
                <input id="#" type="file" accept="image/*" />
              </label>
              <img src='' alt="Sua imagem de perfil." />
            </ImagemDiv>

            <PhotoName>
              <h2>Marcela Castro</h2>
            </PhotoName>
          </Photo>

          <LikeTravel>
            <h3>Recomendado por Marcela.</h3>
            <div className="like">
              <h4>Copacabana Palace</h4>
              <img src='' alt="imagem do hotel" />
            </div>
            <div className="like">
              <h4>Emiliano Hotel</h4>
              <img src='' alt="imagem do hotel" />
            </div>
            <div className="like">
              <h4>Villa de Trancoso Hotel</h4>
              <img src='' alt="imagem do hotel" />
            </div>
          </LikeTravel>
        </ProfileLeft>
        <ProfileRight>
          <AboutMe>
            <h3>Sobre mim</h3>
            <button type="button" id="edit-about">
              <img src='' id="edit-img" alt="Editar sua descrição" />
            </button>

            <ContentEdit>
              <p>Sou uma pessoa que apoixonada por viajar!!</p>
            </ContentEdit>

            <RedeSocialAbout>
              <label className="rede-social-about-1">
                <a href="#">
                  <AiFillInstagram className="icon-social-about icon-color-1" />
                  <span>Instagram</span>
                </a>
              </label>
              <label className="rede-social-about-2">
                <a href="#">
                  <AiFillFacebook className="icon-social-about icon-color" />
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


};
