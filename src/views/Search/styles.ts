import styled from 'styled-components';

export const ContainerSearch = styled.div`
    //background-color: #00C897;
    width: 100%;
    height: 100vh;
    position: relative;
`;

export const ModalPopup = styled.div`
    background-color: #00C897;
`;

export const AreaMarker = styled.div`
    background-color: #00c8972e;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    position: absolute;
    z-index: 99999;
    top: 0;
    left: 0;
`;

export const HeaderMenuRight = styled.div`
    width: 100%;
    height: 100px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 999;
    position: relative;
    h1{
        font-size: 15px;
        color: #fff;
        margin-right: 10px;
    }
    img{
        border-radius: 50%;
        width: 50px;
        height: 100%;
        background-color: #fff;
    }
`;

export const RecommendedSection = styled.div`
    width: 100%;
    height: 150px;  
    padding: 10px;
    z-index: 999;
    position: absolute;
    bottom: 10px;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

`;

export const ArrowButton = styled.div`
    position: absolute;
    top: -40px;
    right: 11px;
    svg{
        background-color: #C4C4C4;
        color: #fff;
        border-radius: 10px;
        width: 30px;
        height: 30px;
        margin-right: 5px;
        cursor: pointer;
    }
`;

export const ImgUser = styled.div`
    width: 50px;
    height: 50px;
    background-color: #111;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 4px 10px 10px rgb(0 0 0 / 20%);
    margin-left: 5px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;

export const LabelSearch = styled.div`
    width: 400px;
    background: linear-gradient(90deg, #3CBA92 51.04%, rgba(46, 81, 87, 0) 100%);
    position: relative;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 4px 10px 10px rgb(0 0 0 / 20%);
    @media (max-width: 500px) {
        width: 300px;
    }
`;

export const InputSearch = styled.input`
    padding: 10px;
    border: none;
    outline: none;
    width: 80%;
    background-color: transparent;
    color: #fff;
    &::placeholder{
        color: #fff;
    }
`;

export const ButtonSearch = styled.button`
    background-color: #FFF8F3;
    border: none;
    border-radius: 5px;
    color: #013C2D;
    width: 100px;
    height: 30px;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
`;
