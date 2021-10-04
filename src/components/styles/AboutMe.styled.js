import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  overflow-y: hidden;
  height: ${(props) => (props.aboutMeActive ? "700px" : "0")};
  padding: ${(props) => (props.aboutMeActive ? "30px" : "0 30px")};
  border: ${(props) =>
    props.aboutMeActive ? "1px solid black" : "0 solid black"};
  border-radius: 10px;
  margin: ${(props) => (props.aboutMeActive ? "30px 0" : "0")};
  transition: 0.3s height ease-in-out, 0.2s padding ease-in-out,
    0.1s border ease-in-out, 0.2s margin ease-in-out;

  @media screen and (max-width: 1200px) {
    padding: ${(props) => (props.aboutMeActive ? "20px" : "0 20px")};
    height: ${(props) => (props.aboutMeActive ? "500px" : "0")};
  }

  @media screen and (max-width: 768px) {
    width: 400px;
    height: ${(props) => (props.aboutMeActive ? "600px" : "0")};
  }
`;
export const Content = styled.div`
  font-weight: 300;
  font-size: 1.5rem;

  > div {
    height: 300px;
    width: 200px;
    margin-top: 30px;
    overflow: hidden;
    border-radius: 10px;
  }
  img {
    height: 300px;
    width: 200px;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
