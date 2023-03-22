import { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FiAtSign } from "react-icons/fi";
import { toast } from "react-toastify";
import ImageGifleft from "../../../assets/imagemLeftCompany.svg";
import Logo from "../../../assets/logo-1.png";
import {
  Button,
  ButtonGoogle,
  Container,
  Form,
  H1,
  Header,
  ImgRight,
  Input,
  Label,
  LeftContainer,
  P,
  RightContainer,
  Span,
  Strong,
} from "./styles";

export default function RegisterCompany() {
  const [btnLogin, setBtnLogin] = useState(true);

  const testandoToast = (e: any) => {
    e.preventDefault();
    toast.success("Success Notification !", { autoClose: false });
  };

  return (
    <Container>
      <LeftContainer>
        <img
          src={ImageGifleft}
          alt="imagem principal"
          width="100%"
          height="100%"
        />
      </LeftContainer>
      <RightContainer>
        <Header>
          <ImgRight src={Logo} alt="logo home" />
        </Header>
        <Form>
          <H1>
            Cadastra <span>se</span>
          </H1>
          <Span>Crie sua conta totalmente grátis.</Span>
          <Label>
            <FiAtSign size={18} />
            <Input placeholder="Email..." type="email" />
          </Label>
          <Label>
            <BsEyeSlash size={18} />
            <Input placeholder="Senha..." type="password" />
          </Label>
          <P>
            Ainda não tenho conta. <Strong>Clique aqui!</Strong>
          </P>
          <Button onClick={testandoToast}>Entar</Button>
          <ButtonGoogle>
            Entrar com o Google
            <FcGoogle size={15} />
          </ButtonGoogle>
        </Form>
      </RightContainer>
    </Container>
  );
}
