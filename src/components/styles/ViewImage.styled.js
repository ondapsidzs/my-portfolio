import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
`;
export const Content = styled.div`
  img {
    height: 60vh;
    max-width: 1000px;
    object-fit: contain;
    object-position: center;
  }
`;
export const Close = styled(IoClose)`
  fill: white;
  cursor: pointer;
  position: absolute;
  right: 100px;
  top: 30px;
  height: 50px;
  width: auto;
`;
