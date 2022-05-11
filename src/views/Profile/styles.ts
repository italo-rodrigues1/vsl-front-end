import styled from 'styled-components';

export const PageProfile = styled.div`
    width: 100%;
    height: 126vh;
    background:#ECE9E6;

    @media (max-width: 725px) {
        height: 198vh;
    }
`;

export const Header = styled.header`
    width: 100%;
    height: 200px;
    background: linear-gradient(to right, #1d976c, #93f9b9);
`;

export const LogoProfile =styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    img{
        margin-top:10px;
    }
`;

export const ContainerProfile = styled.div`
    display: flex;
    padding: 20px;
    width: 100%;
    height: 100%;
    position: absolute;
    align-items: center;
    justify-content:center;
    top: 190px;
    z-index: 2;
    
    @media (max-width: 725px) {
        flex-direction: column;
        top: 130px;
        height:auto;
        padding: 0 10px;
    }
`;

export const ProfileLeft =styled.section`
    width: 20rem;
    height: 120vh;
    display: flex;
    float: left;
    margin-right: 20px;
    flex-direction: column;
    @media (max-width: 725px) {
        width:100%;
        margin-right: 0;
        height: auto;
    }
`;

export const ProfileRight =styled.section`
    width: 35rem;
    height: 120vh;
    float: right;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    @media (max-width: 725px) {
        width: 100%;
        padding-top: 15px;
    }
`;

export const Photo = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 10px;
    background:#202024;
    align-items: center;
    justify-content:center;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    box-shadow: 2px #fff solid;
`;

export const ImagemDiv = styled.div`{
    border-radius: 50%;
    width: 140px;
    height: 125px;
    background: #fff;
    border: 2px solid #abffab;
    overflow: hidden;
    label{
        width: 136px;
        background: #fff0;
        height: 122px;
        position: absolute;
        border-radius: 50%;
        cursor: pointer;
        input[type="file"]{
            display: none;
        }
        &:hover{
            background: rgba(255, 255, 255, 0.159);
            border: 2px solid rgb(135, 172, 148);
            border: 2px solid rgb(255, 255, 255);
        }
    }
    img{
        width: 100%;
        height: 100%;
        border-radius:50%;
        cursor: pointer;
    }
}`;

export const PhotoName = styled.div`
    margin-top: 20px;
    color: #fff;
    h2{
        &::before{
            content:"";
            border-bottom: 2px solid  rgb(90, 189, 126);
            position: absolute;
            height: 20px;
            width:72px;
            border-radius: 2px;
            margin-top: 10px;
        }
        &::after{
            content: "";
            border-bottom: 2px solid  rgb(90, 189, 126);
            position: absolute;
            height: 20px;
            width: 72px;
            border-radius: 2px;
            margin: -21px -74px;
        }
    }
`;

export const LikeTravel = styled.div`{
    height: auto;
    padding:10px 0;
    border-radius:10px;
    background:#202024;
    > div{
        width: 100%;
        background: #fff;
        height: 150px;
        border-radius: 10px;
        margin: 10px 10px;
        display: flex;
        flex-direction: column;
        img{
            width:100%;
            height: 131px;
            border-radius: 0 0 10px 10px;
        }
        h4{
            text-align: center;
            color: rgb(112, 118, 111);
            font-family: 'Poppins', sans-serif;
            font-size:15px;
        }
        h3{
            color: #fff;
            padding-left: 10px;
        } 

        @media (max-width: 725px) {
            margin:15px 0;
        }
    }
}`;

export const AboutMe = styled.div`
    width: 100%;
    height: 250px;
    background: #202024;
    border-radius: 10px;

    justify-content:space-between;
    display: flex;
    position: relative;
    overflow: hidden;
    h3{
        color: #fff;
        margin:10px;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
    }
    button{
        position: relative;
        width: 40px;
        cursor: pointer;
        height: 40px;
        background: none;
        border: none;
        color: #fff;
        &:hover{
            background: #111;
            border-radius: 10px;
        }
    }
`;

export const HistoricTravel = styled.div`
    height: 100%;
    background: #202024;
    border-radius: 10px;
    margin-top: 30px;
    display: flex;
    justify-content:space-between;
    h3{
        color: #fff;
        margin: 10px;
    }
    @media (max-width: 725px) {
        margin-top: 15px;
    }
`;

export const ContentEdit = styled.div`
    width: 100%;
    height: 55px;
    position: absolute;
    bottom: 44px;
    padding: 0 10px;
    p{
        color: #fff;
    }
`;

export const RedeSocialAbout = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    bottom: 8px;
    height: 43px;
    width: 100%;
    label{
        margin: 0 8px;
        cursor: pointer;
        background: rgb(41, 41, 46) none repeat scroll 0% 0%;
        width: 100px;
        height: 100%;
        border-radius: 5px;
        &:hover{
            background: rgb(50, 50, 56) none repeat scroll 0% 0%;
        }
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            text-decoration: none;
 
            span{
                color: #fff;
                font-size: 14px;
            }
            svg{
                width: 20px;
                height: 15px;
                color: rgb(255, 255, 255);
            }
        }
    }
`;



