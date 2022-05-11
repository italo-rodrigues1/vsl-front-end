import { useState } from 'react';
import { 
  Container,
  LeftContainer,
  RightContainer,
  Header,
  Form,
  H1,
  Span,
  Input,
  P,
  Strong,
  Button,
  Label,
  ImgRight,
  ButtonGoogle
} from './styles';
import Logo from '../../assets/logo-1.png';
import Imageleft  from '../../assets/imagem-principal-login.jpg';
import { BsEyeSlash } from 'react-icons/bs';
import { FiAtSign } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

export default function Login() {
  const [ btnLogin,setBtnLogin ] = useState(true)

  const testandoToast = (e) => {
    e.preventDefault();
    toast.success("Success Notification !",{autoClose:false});
  }

  return (
    <Container>
      <LeftContainer>
        <img src={Imageleft} alt="imagem principal" width="100%" height="100%"/>
      </LeftContainer>
      <RightContainer>
        <Header>
          <ImgRight src={Logo} alt="logo" />
        </Header>
        <Form>
          <H1>Cadastra <span>se</span></H1>
          <Span>Crie sua conta totalmente grátis.</Span>
          <Label>
            <FiAtSign size={18}/>
            <Input placeholder="Email..." type="email"  />
          </Label>
          <Label>
            <BsEyeSlash size={18}  />
            <Input placeholder="Senha..." type="password" />
          </Label>
          <P>Ainda não tenho conta. <Strong>Clique aqui!</Strong></P>
          <Button onClick={testandoToast}>Entar</Button>
          <ButtonGoogle>
            Entrar com o Google 
            <FcGoogle size={15}/>
          </ButtonGoogle>
        </Form>
      </RightContainer>
    </Container>
  )
}
  