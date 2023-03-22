/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt_decode from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FiAtSign } from "react-icons/fi";
import { IoEyeSharp } from "react-icons/io5";
import { AuthContext } from "../../../context/User";
import Imageleft from "../../assets/imagem-principal-login.jpg";
import Logo from "../../assets/logo-1.png";
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
  Span,
} from "./styles";

export default function Login() {
  const [buttonType, setButtonType] = useState(false);
  const [btnSingup, setBtnSingup] = useState(true);

  const {
    loginForm,
    loginGoogle,
    registerForm,
    setName,
    setEmail,
    setPassword,
  } = useContext(AuthContext) as any;

  function handleCallbackResponse(response: any) {
    console.log(response);
    const decoded: any = jwt_decode(response.credential);
    console.log("decoded", decoded);
    setName(decoded.name);
    setEmail(decoded.email);
    loginGoogle(response.credential);
  }

  useEffect(() => {
    localStorage.removeItem("Token");

    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("my-signin2"), {
      theme: "outline",
      size: "large",
      type: "standard",
    });
  }, []);

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
              <H1 changeLogin={btnSingup}>Login</H1>
              <Span>Entre com sua conta.</Span>
            </>
          ) : (
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
            <button
              type="button"
              onClick={() =>
                buttonType ? setButtonType(false) : setButtonType(true)
              }
            >
              {buttonType ? <IoEyeSharp size={18} /> : <BsEyeSlash size={18} />}
            </button>
            <Input
              placeholder="Senha..."
              type={buttonType ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Label>
          {btnSingup ? (
            <>
              <P>
                Ainda não tenho conta.{" "}
                <BtnSingup onClick={(e) => changeBtn(e)}>
                  Clique aqui!
                </BtnSingup>
              </P>
              <Button type="submit" onClick={loginForm}>
                Entrar
              </Button>
            </>
          ) : (
            <>
              <P>
                Já tenho conta.{" "}
                <BtnSingup onClick={(e) => changeBtn(e)}>
                  Clique aqui!
                </BtnSingup>
              </P>
              <Button type="submit" onClick={registerForm}>
                Cadastrar
              </Button>
            </>
          )}

          <ButtonGoogle id="my-signin2">
            Entrar com o Google
            <FcGoogle size={15} />
          </ButtonGoogle>
        </Form>
      </RightContainer>
    </Container>
  );
}
