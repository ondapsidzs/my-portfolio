import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: ${({ isActive }) => (isActive ? "900px" : "0")};
  width: 500px;
  margin: ${({ isActive }) => (isActive ? "30px 0" : "0")};
  padding: ${({ isActive }) => (isActive ? "30px" : "0 30px")};
  border: ${({ isActive }) => (isActive ? "1px solid black" : "0 solid black")};
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s height ease-in-out, 0.2s padding ease-in-out,
    0.1s border ease-in-out, 0.2s margin ease-in-out;

  @media screen and (max-width: 1200px) {
    padding: ${({ isActive }) => (isActive ? "20px" : "0 20px")};
    height: ${({ isActive }) => (isActive ? "700px" : "0")};
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    height: ${({ isActive }) => (isActive ? "750px" : "0")};
  }
`;
export const Content = styled.div`
  > p {
    font-size: 1.5rem;
    font-weight: 300;
  }

  > div {
    display: flex;
    width: 100%;
    margin-top: 30px;
  }

  img {
    height: 150px;
    width: 300px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    margin-bottom: 30px;

    &.w-150 {
      width: 150px;
    }

    &.ml {
      margin-left: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    > p {
      font-size: 2rem;
    }
  }
`;
export const Cebu = styled.img``;
export const Humba = styled.img``;
export const Lechon = styled.img``;
