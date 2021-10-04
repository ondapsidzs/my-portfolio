import styled from "styled-components";

export const Container = styled.div`
  z-index: 100;
  position: fixed;
  display: flex;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 30px;
  text-align: center;

  h1 {
    margin-bottom: 30px;
  }

  p {
    width: 80%;
    margin-bottom: 30px;
  }

  button {
    padding: 10px 30px;
    border-radius: 30px;
    font-family: "Monstserrat", sans-serif;
    font-weight: 300;
    background: white;
    border: none;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
    transition-property: opacity;

    &:hover {
      opacity: 0.8;
    }
  }

  img {
    height: 250px;
    width: 600px;
    object-fit: cover;
    object-position: top;
    margin-top: 30px;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
      width: 400px;
    }
  }

  @media screen and (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
