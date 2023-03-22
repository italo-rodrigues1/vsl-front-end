import styled, { keyframes } from "styled-components";
interface Props {
  backgroundColor: any;
}

export const ContainerMenu = styled.div`
  width: 200px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  gap: 10px;
  transition: width 2s;
  box-shadow: 4px 10px 10px rgb(0 0 0 / 10%);
  margin: 0 -70px;
  padding: 10px;
  text-align: right;
`;

export const Ul = styled.ul`
  width: 100%;
  gap: 10px;

  a {
    color: #2e5157;
    text-decoration: none;

    li {
      list-style: none;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      border-radius: 10px;
      margin: 10px;
      padding: 5px;
      font-size: 16px;
      &:hover {
        background-color: #cccccc;
      }
    }
  }
  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const ButtonExit = styled.button`
  width: 89%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  font-size: 16px;
  &:hover {
    background-color: #cccccc;
  }
`;

export const ButtonDarkMode = styled.button<Props>`
  background-color: ${(props) =>
    props.backgroundColor === "white" ? "#e3e3e3" : "#000000b0"};
  font-size: 20px;
  width: 50px;
  height: 33px;
  text-align: center;
  border-radius: 10px;
  padding: 5px 0;
`;
