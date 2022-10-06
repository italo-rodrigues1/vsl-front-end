import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FiAtSign } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Imageleft from "../../assets/imagem-principal-login.jpg";
import Logo from "../../assets/logo-1.png";
import api from "../../services/api";
import {
  BtnSingup,
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
  Span
} from "./styles";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnSingup, setBtnSingup] = useState(true);
  const navigate = useNavigate();

  const loginForm = (e: any) => {
    e.preventDefault();
    console.log("login", email, password);
    if (btnSingup && (name === "" || email === "" || password === "")) {
      return toast.error("Você precisa preencher os campos!", {
        autoClose: false,
      });
    } else if (
      email === "italosport110@hotmail.com" &&
      password === "123" &&
      !btnSingup
    ) {
      navigate("/search");
    }
    // try{
    //   const res = api.post('http://localhost:3333/users',{name,email,password})
    //   toast.success("Success Notification !");
    // }catch(e){
    //   toast.error("Verifique suas informações. Usuário não existe!");
    // }
  };

  const changeBtn = (e: any) => {
    e.preventDefault();
    btnSingup ? setBtnSingup(false) : setBtnSingup(true);
  };

  return (
    <Container>
      <LeftContainer>
        <img
          src={Imageleft}
          alt="imagem principal"
          width="100%"
          height="100%"
        />
      </LeftContainer>
      <RightContainer>
        <Header>
          <ImgRight src={Logo} alt="logo" />
        </Header>
        <Form>
          {btnSingup ? (
            <>
              <H1 changeLogin={btnSingup}>
                Cadastra <span>se</span>
              </H1>
              <Span>Crie sua conta totalmente grátis.</Span>
              <Label>
                <AiOutlineUser size={18} />
                <Input
                  placeholder="Nome..."
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </Label>
            </>
          ) : (
            <>
              <H1 changeLogin={btnSingup}>Login</H1>
              <Span>Entre com sua conta.</Span>
            </>
          )}
          <Label>
            <FiAtSign size={18} />
            <Input
              placeholder="Email..."
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <Label>
            <BsEyeSlash size={18} />
            <Input
              placeholder="Senha..."
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
          {btnSingup ? (
            <P>
              Já tem conta.{" "}
              <BtnSingup onClick={(e) => changeBtn(e)}>Clique aqui!</BtnSingup>
            </P>
          ) : (
            <P>
              Ainda não tenho conta.{" "}
              <BtnSingup onClick={(e) => changeBtn(e)}>Clique aqui!</BtnSingup>
            </P>
          )}
          <Button type="submit" onClick={loginForm}>
            Entrar
          </Button>
          <ButtonGoogle>
            Entrar com o Google
            <FcGoogle size={15} />
          </ButtonGoogle>
        </Form>
      </RightContainer>
    </Container>
  );
}
