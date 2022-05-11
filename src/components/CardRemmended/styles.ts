import styled, { keyframes } from 'styled-components';


export const Card = styled.div`
    width: 500px;
    height: 100%;
    background-color: #00C897;
    display: flex;
    border-radius: 10px;
    box-shadow: 4px 10px 10px rgb(0 0 0 / 20%);

`;

export const CardImg = styled.div`
    width: 40%;
    img{
        width: 100%;
        height: 100%;
        border-radius: 10px 0 0 10px;
    }
`;

export const CardContent = styled.div`
    width: 60%;
    color: #111;
    background-color: #fff;
    position: relative;
    border-radius: 0 10px 10px 0;
    padding: 10px;
    gap: 5px;
    &::after{
        content: '';
        position: absolute;
        height: 100%;
        width: 22px;
        top: 0;
        right: 0;
        background: linear-gradient(180deg, #3CBA92 34.9%, rgba(46, 81, 87, 0.03) 100%);
        border-radius: 0 10px 0 10px;
    }

    h3{
        color: #2E5157
    }
    p{
        color: #3CBA92
    }
    span{
        color: #2E5157
    }
`;

