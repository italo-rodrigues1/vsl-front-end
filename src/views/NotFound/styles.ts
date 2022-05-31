import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    a{ 
        color: #000;
        text-decoration: none;
        font-size: 1.5rem;
        margin-top: 40px;
        background: #6DFFB4;
        border-radius: 5px;
        padding: 10px;
        transition: 0.3s;
        box-shadow: 0px 0px 2px #fff;
        &:hover{
            opacity: 0.7;
        }
    }
`;