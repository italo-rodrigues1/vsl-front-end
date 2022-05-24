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
  BtnSingup,
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
import { AiOutlineUser } from 'react-icons/ai';
import { toast } from 'react-toastify';
import api from '../../services/api';

export default function Login() {
  const [ name,setName ] = useState('')
  const [ email,setEmail ] = useState('')
  const [ password,setPassword ] = useState('')
  const [ btnSingup,setBtnSingup ] = useState(true)

  const loginForm = (e:any) => {
    e.preventDefault();
    if(name === '' || email === '' || password === ''){
      return toast.error("Você precisa preencher os campos!",{autoClose:false});
    }
    try{
      const res = api.post('http://localhost:3333/users',{name,email,password})
      toast.success("Success Notification !");
    }catch(e){
      toast.error("Verifique suas informações. Usuário não existe!");
    }
  }

  const changeBtn = (e:any) => {
    e.preventDefault();
    btnSingup ? setBtnSingup(false) : setBtnSingup(true)
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
          {
            btnSingup ? (
              <>
              <H1 changeLogin={btnSingup}>Cadastra <span>se</span></H1>
              <Span>Crie sua conta totalmente grátis.</Span>
              <Label>
                <AiOutlineUser size={18}  />
                <Input placeholder="Nome..." type="text" onChange={(e)=>setName(e.target.value)}/>
              </Label>
              </>
            ):(
              <>
              <H1 changeLogin={btnSingup} >Login</H1>
              <Span>Entre com sua conta.</Span>
              </>
            )
          }
          <Label>
            <FiAtSign size={18}/>
            <Input placeholder="Email..." type="email" onChange={(e)=>setEmail(e.target.value)}/>
          </Label>
          <Label>
            <BsEyeSlash size={18}  />
            <Input placeholder="Senha..." type="password" onChange={(e)=>setPassword(e.target.value)}/>
          </Label>
          {
            btnSingup ?(
              <P>Ainda não tenho conta. <BtnSingup onClick={(e)=> changeBtn(e)}>Clique aqui!</BtnSingup></P>
            ):(
              <P>Já tem conta. <BtnSingup onClick={(e)=> changeBtn(e)}>Clique aqui!</BtnSingup></P>
            )
          }
          <Button onClick={loginForm}>Entrar</Button>
          <ButtonGoogle>
            Entrar com o Google 
            <FcGoogle size={15}/>
          </ButtonGoogle>
        </Form>
      </RightContainer>
    </Container>
  )
}
  