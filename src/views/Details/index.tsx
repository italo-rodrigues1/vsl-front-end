import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Container, Header, Main } from "./styles";

export default function Details() {
  const { id } = useParams();
  const getInfoHotel = async () => {
    try {
      const res = await api.get(`/api/place`);
      console.log("getInfoGotel > res > ", res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getInfoHotel();
  }, []);
  return (
    <Container>
      <Header>
        <img
          src="https://random.imagecdn.app/500/150"
          alt="Imagem central do detalhe"
        />
        <h1>Abreu e lima</h1>
      </Header>
      <Main></Main>
    </Container>
  );
}
