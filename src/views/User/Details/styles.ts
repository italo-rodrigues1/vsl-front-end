import styled from 'styled-components';

export const Container = styled.div`

`;

export const Header = styled.header`
    width: 100%;
    height: 40vh;
    background: green;
    border-radius: 0 0 50px 50px;
    display: flex;
    align-items: end;
    justify-content: center;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        border-radius: 0 0 50px 50px;
    }
    h1{
        color: #fff;
        position: absolute;

    }
`;

export const Main = styled.main`
    background: red;
    height: 60vh;
`;