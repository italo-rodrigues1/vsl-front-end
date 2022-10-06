import styled, { keyframes } from "styled-components";

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
`;
