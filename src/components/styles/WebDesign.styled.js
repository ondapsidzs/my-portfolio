import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ isActive }) => (isActive ? "30px 0" : "0")};
  padding: ${({ isActive }) => (isActive ? "30px" : "0 30px")};
  height: ${({ isActive }) => (isActive ? "2200px" : "0")};
  width: 700px;
  border: ${({ isActive }) => (isActive ? "1px solid black" : "0 solid black")};
  border-radius: 10px;
  transition: 0.3s height ease-in-out, 0.2s padding ease-in-out,
    0.1s border ease-in-out, 0.2s margin ease-in-out;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    width: 600px;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;
export const Content = styled.div`
  width: 100%;
  font-weight: 300;
  font-size: 1.5rem;

  b {
    display: flex;
    justify-content: center;
    width: 200px;
  }

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
export const WebDesignContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: 200px;
  grid-gap: 30px;
  margin-top: 30px;
`;
export const WebDesigns = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    height: 100%;
    width: 100%;
    padding: 30px;
    padding-right: 300px;
    /* background: rgb(0, 0, 0, 0.9); */
    background-image: linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0));
    color: white;
    transform: translateX(-100%);
    transition: 0.2s all ease-in-out;
    transition-property: transform;

    h1 {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 10px;
    }

    p {
      font-size: 0.8rem;
      font-weight: 400;
      text-align: center;
    }

    a {
      margin-top: 20px;
    }

    button {
      background: white;
      border: 1px solid white;
      color: black;

      &:hover {
        color: white;
        background: black;
      }

      @media screen and (max-width: 1200px) {
        font-size: 0.9rem;
      }
    }

    @media screen and (max-width: 1200px) {
      position: static;
      width: 49%;
      border-radius: 10px;
      transform: translateX(0);
      padding-right: 30px;
      background: black;
      display: none;
    }
  }

  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    object-position: top;
    transition: 0.2s all ease-in-out;
    transition-property: transform;

    @media screen and (max-width: 1200px) {
      width: 49%;
      width: 100%;
      border-radius: 10px;
    }
  }

  &:hover {
    img {
      transform: scale(1.05);

      @media screen and (max-width: 1200px) {
        transform: scale(1);
      }
    }
    div {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }
`;
