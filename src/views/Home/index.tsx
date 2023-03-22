import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/logo-1.png";
import MainImg from "../../assets/pessoas em cadeiras de rodas 1.jpg";
import {
  Card,
  CardBlock,
  Container,
  ContentCard,
  ImgBlock,
  Logo,
} from "./styles";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <ImgBlock>
        <img src={MainImg} alt="Main imagem" />
      </ImgBlock>
      <CardBlock>
        <Logo>
          <img src={LogoImg} alt="Logo na home" />
        </Logo>
        <ContentCard>
          <Card onClick={() => navigate("/register/company")}>
            Anuncie o seu Hotel
            <p>Hotéis</p>
          </Card>
          <Card onClick={() => navigate("/")}>
            Explore pelos hoteis cadastrados
            <p>Usuário</p>
          </Card>
        </ContentCard>
      </CardBlock>
    </Container>
  );
}
