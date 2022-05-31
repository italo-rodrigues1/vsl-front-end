import { Link } from "react-router-dom";
import Page404 from '../../assets/page-404.svg';
import {Container} from './styles';

export default function NotFound(){
    return(
        <Container>
            <img src={Page404} alt='imagem de pagina não encontrada'/>
            <Link to='/'>Voltar para o inicio</Link>
        </Container>
    )
}