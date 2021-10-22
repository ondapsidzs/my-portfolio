import styled from "styled-components";

export const Container = styled.div`
  cursor: default;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 20px;
  background: rgb(236, 236, 236);
  border-radius: 20px;
  font-weight: 400;
  font-size: 1.5rem;
  animation-name: bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 1s;

  @keyframes bounce {
    0% {
      transform: translateY(0) translateX(-50%);
    }
    10% {
      transform: translateY(-10px) translateX(-50%);
    }
    20% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-5px) translateX(-50%);
    }
    50% {
      transform: translateY(0) translateX(-50%);
    }
  }
`;
export const Content = styled.div`
  position: relative;

  > div {
    position: absolute;
    height: 20px;
    width: 20px;
    border: none;
    outline: none;
    cursor: default;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;

    border-top: 20px solid rgb(236, 236, 236);
  }
`;
