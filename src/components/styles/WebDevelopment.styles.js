import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ isActive }) => (isActive ? "30px 0" : "0")};
  padding: ${({ isActive }) => (isActive ? "30px" : "0 30px")};
  height: ${({ isActive }) => (isActive ? "1600px" : "0")};
  width: 700px;
  border: ${({ isActive }) => (isActive ? "1px solid black" : "0 solid black")};
  border-radius: 10px;
  transition: 0.5s height ease-in-out, 0.2s padding ease-in-out,
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
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  width: 100%;
  font-weight: 300;
`;
export const Grid = styled.div`
  width: 100%;
  display: grid;
  margin-top: 30px;
  justify-content: space-between;
  grid-auto-rows: 200px;
  grid-template-columns: repeat(2, 48%);
  grid-row-gap: 20px;

  > div {
    height: 100%;
    width: 100%;
    background-color: black;
    border-radius: 10px;
    overflow: hidden;

    > a > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }

    &:hover {
      > a > img {
        transform: scale(1.05);
        transition: 0.2s all ease-in-out;
        transition-property: transform;
      }
    }
  }
`;
