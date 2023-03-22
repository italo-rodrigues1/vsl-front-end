import { useNavigate } from "react-router-dom";
import { ButtonBackHome, Container, TitleText } from "./styles";

export function ErrorBoundaryMain() {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
    window.location.reload();
  };
  
  return (
    <Container>
      <TitleText>Ops... aconteceu algo!</TitleText>
      <ButtonBackHome onClick={backHome}>Voltar</ButtonBackHome>
    </Container>
  );
}
