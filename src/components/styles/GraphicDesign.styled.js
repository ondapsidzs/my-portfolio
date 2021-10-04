import styled from "styled-components";

import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ isActive }) => (isActive ? "30px 0" : "0")};
  padding: ${({ isActive }) => (isActive ? "30px" : "0 30px")};
  height: ${({ isActive }) => (isActive ? "1100px" : "0")};
  width: 700px;
  border: ${({ isActive }) => (isActive ? "1px solid black" : "0 solid black")};
  border-radius: 10px;
  transition: 0.3s height ease-in-out, 0.2s padding ease-in-out,
    0.1s border ease-in-out, 0.2s margin ease-in-out;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    width: 600px;
    padding: ${({ isActive }) => (isActive ? "20px" : "0 20px")};
    height: ${({ isActive }) => (isActive ? "1500px" : "0")};
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    height: ${({ isActive }) => (isActive ? "2400px" : "0")};
  }
`;
export const Content = styled.div`
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

    @media screen and (max-width: 1200px) {
      width: 560px;
    }

    @media screen and (max-width: 768px) {
      width: 360px;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 560px;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    width: 360px;
  }
`;
export const GraphicDesignGridContainer = styled.div`
  display: flex;
  transition: 0.5s all ease-in-out;
  transition-property: transform;

  > div {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(3, 31%);
    grid-template-rows: 200px;
    grid-gap: 20px;
    margin-top: 30px;

    > div {
      height: 200px;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        cursor: pointer;
        transition: 0.2s transform ease-in-out;

        &.contain {
          object-fit: contain;
        }

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(2, 48%);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 360px;
    }
  }
`;
export const LeftArrow = styled(GoTriangleLeft)`
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: opacity, transform;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;
export const RightArrow = styled(GoTriangleRight)`
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: opacity, transform;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;
export const Drawings = styled.div`
  min-width: 640px;
  margin-right: 30px;

  @media screen and (max-width: 1200px) {
    min-width: 560px;
    margin-right: 110px;
  }
`;
export const Logos = styled.div`
  min-width: 640px;
  margin-right: 30px;

  @media screen and (max-width: 1200px) {
    min-width: 560px;
    margin-right: 110px;
  }
`;
export const Posters = styled.div`
  min-width: 640px;

  @media screen and (max-width: 1200px) {
    min-width: 560px;
  }
`;
