import styled, { keyframes } from 'styled-components';



export const ContainerMenu = styled.div`
    position: absolute;
    right: 237px;
    top: 84px;
    background-color: #fff;
    width: auto;
    height: auto;
    border-radius: 10px;
    gap: 10px;
    transition: width 2s;
    box-shadow: 4px 10px 10px rgb(0 0 0 / 10%);
`;

export const Ul = styled.ul`
    width: 100%;
    gap: 10px;
    a{
        color: #2E5157;
        text-decoration: none;

        li{
            list-style: none;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            border-radius: 10px;
            margin: 10px; 
            font-size: 20px;
            &:hover{
                background-color: #CCCCCC;
            }
        }
    }
   
`;