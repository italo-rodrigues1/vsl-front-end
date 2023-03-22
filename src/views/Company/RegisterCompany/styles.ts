import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100vh;
    background: #FFF8F3 ;
    color: #fff;
    display: flex;
`;

export const LeftContainer = styled.div`
    width: 40%;
    height: 95%;
    box-shadow: -6px 3px 1em #111111a8;
    
    @media (max-width: 768px) {
        display:none;
    }
`;

export const RightContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;

    @media (max-width: 768px) {
        width: 100%;  
    }
`;

export const Header = styled.header`
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
    height: 100px;
    background: #F0ECE3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
`;

export const H1 = styled.h1`
    color: #363636;
    margin: -10px -4px;
    position: relative;
    &::before{
        content: '';
        width: 48px;
        position: absolute;
        height: 40px;
        background: rgba(0, 200, 151, 0.49);
        top: 5px;
        right: 15px;
        border-radius: 50%;
    }
    &::after{
        content: '';
        width: 40px;
        position: absolute;
        height: 8px;
        background: #363636;
        top: 23px;
        right: 74px;
        border-radius: 5px;
    }
    span{
        margin: 0 35px;
    }
`;

export const Span = styled.span`
    color: #00C897;
`;

export const Label = styled.label`
    position: relative;
    color: #fff;
    width: 100%;
    svg {
        position: absolute;
        right: 15px;
        bottom: 15px;
        color: rgb(151 141 141);
    }
`;

export const Input = styled.input`
    padding: 10px;
    background: none;
    outline: 0;
    border: 1px solid #BDBBBB;
    width: 100%;
    height: 50px;
`;

export const P = styled.p`
    color: #1B1A17;
`;

export const pulse = keyframes`
    0% { 
        box-shadow: 0px 4px 4px rgba(0, 200, 151, 0.42);
    }
`

export const Button = styled.button`
    padding: 10px ;
    background: #00C897;
    border: none;
    color: #fff;
    cursor: pointer;
    width: 100%;
    &:hover, 
    :focus {
        animation: ${pulse} 1s;
        box-shadow: 0 0 0 2em transparent;
    }
`;

export const Strong = styled.strong`
    color: #00C897;
    cursor: pointer;
`;

export const ImgRight = styled.video`
    width:80px;
    height:80px;
`;

export const ButtonGoogle = styled.button`
    border: 2px solid #BDBBBB;
    background: none;
    padding: 10px ;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    &:hover{
        border-color: #00C897;
        background: #fffbf3;
    }
`;

