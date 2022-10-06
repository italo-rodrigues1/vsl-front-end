import styled, { keyframes } from "styled-components";

export const Carousel = styled.div`
  width: 500px;
  height: 100%;
  background-color: #00c897;
  display: flex;
  border-radius: 10px;
  box-shadow: 4px 10px 10px rgb(0 0 0 / 20%);
`;

export const ArrowButton = styled.div`
  position: absolute;
  top: -40px;
  right: 11px;
  svg {
    background-color: #c4c4c4;
    color: #fff;
    border-radius: 10px;
    width: 30px;
    height: 30px;
    margin-right: 5px;
    cursor: pointer;
  }
`;
