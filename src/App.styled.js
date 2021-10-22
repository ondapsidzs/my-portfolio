import styled from "styled-components";

export const LogoIcon = styled.img`
  z-index: 1000;
  position: fixed;
  top: 50px;
  right: 5%;
  height: 100px;
  width: 100px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  transition-property: opacity;
  transform: rotate(90deg);

  @media screen and (max-width: 1200px) {
    top: 20px;
    height: 80px;
    width: 80px;
  }

  @media screen and (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;
export const Container = styled.div``;
export const Content = styled.div`
  width: 800px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 600px;
  }

  @media screen and (max-width: 768px) {
    width: 400px;
  }
`;
export const AnimatedContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 4rem;
  width: 100%;
  overflow-y: hidden;

  > div {
    position: relative;
    height: 100%;
    width: 100%;

    > div {
      position: absolute;
      font-weight: 700;
      font-size: 3.15rem;
      transition: 0.2s all ease-in-out;

      > span {
        position: relative;
        height: 100%;
        width: 100%;

        > div {
          position: absolute;
          top: 0;
          left: 12px;
          white-space: nowrap;
          transition: 0.2s all ease-in-out;
        }

        .subDivBottomHidden {
          top: 100%;
        }

        .subDivShow {
          top: 0;
        }

        .subDivTopHidden {
          top: -100%;
        }
      }
    }

    .bottomHidden {
      bottom: -4rem;
    }

    .show {
      bottom: 0rem;
    }

    .topHidden {
      bottom: 4rem;
    }
  }
`;
