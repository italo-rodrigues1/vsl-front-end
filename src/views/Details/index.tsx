import { Header,Main,Container } from "./styles";

export default function Details() {
    return (
      <Container>
        <Header>
          <img src='https://random.imagecdn.app/500/150' alt='Imagem central do detalhe'/>
          <h1>Abreu e lima</h1>
        </Header>
        <Main>
          <h1>Italo</h1>
        </Main>
      </Container>
    )
}