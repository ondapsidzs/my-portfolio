import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ isActive }) => (isActive ? "30px 0" : "0")};
  padding: ${({ isActive }) => (isActive ? "30px" : "0 30px")};
  height: ${({ isActive }) => (isActive ? "1000px" : "0")};
  width: 700px;
  border: ${({ isActive }) => (isActive ? "1px solid black" : "0 solid black")};
  border-radius: 10px;
  transition: 0.5s height ease-in-out, 0.2s padding ease-in-out,
    0.1s border ease-in-out, 0.2s margin ease-in-out;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    width: 600px;
    height: ${({ isActive }) => (isActive ? "700px" : "0")};
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: ${({ isActive }) => (isActive ? "1000px" : "0")};
  }
`;
export const Content = styled.div`
  width: 100%;
  font-weight: 300;
  font-size: 1.5rem;
  text-align: justify;

  a {
    display: block;
    width: 100%;
    margin-top: 30px;

    button {
      font-family: "Montserrat", sans-serif;
      font-weight: 300;
      width: 100%;
      padding: 10px 0;
      border: 1px solid black;
      border-radius: 50px;
      background: black;
      color: white;
      cursor: pointer;
      transition: 0.2s all ease-in-out;
      transition-property: background, color;

      &:hover {
        background: none;
        color: black;
      }
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
