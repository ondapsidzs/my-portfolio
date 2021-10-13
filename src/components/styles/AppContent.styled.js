import styled from "styled-components";

import { GoTriangleLeft } from "react-icons/go";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram, AiFillGoogleCircle } from "react-icons/ai";

export const Container = styled.div`
  padding: 100px 0;
  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
export const Content = styled.div`
  font-size: 3.15rem;
  font-weight: 700;
  animation-name: ${(props) => (props.appContentActive ? "slideIn" : "")};
  display: ${(props) => (props.appContentActive ? "block" : "none")};
  animation-timing-function: ease-in-out;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;

  > div {
    display: flex;

    &.nw {
      white-space: nowrap;
    }
  }

  span {
    position: relative;
    cursor: pointer;
    margin-left: 15px;

    &::after {
      position: absolute;
      left: 0;
      bottom: -3px;
      content: "";
      height: 5px;
      width: 0;
      background: black;
      transition: 0.2s all ease-in-out;

      @media screen and (max-width: 768px) {
        width: 100%;
        height: 2px;
      }
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }

    @keyframes slideIn {
      0% {
        display: none;
        opacity: 0;
        transform: translateX(-100px);
      }
      40% {
        display: block;
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;
export const LeftArrow = styled(GoTriangleLeft)`
  align-self: center;
  width: 50px;

  &.red {
    fill: rgb(181, 33, 33);
  }

  &.blue {
    fill: rgb(33, 119, 181);
  }

  &.gold {
    fill: rgb(255, 221, 28);
  }
`;
export const Contact = styled.div`
  padding: 50px 0;
  position: relative;
  animation-name: ${(props) => (props.appContentActive ? "slideIn" : "")};
  display: ${(props) => (props.appContentActive ? "block" : "none")};
  animation-timing-function: ease-in-out;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;

  > div {
    margin-top: 10px;
  }

  svg {
    fill: black;
    height: 50px;
    width: auto;
    margin-right: 10px;
    transition: 0.4s all ease-in-out;
    transition-property: transform;

    &:hover {
      transform: scale(1.05);
      opacity: 0.6;
    }
  }

  @keyframes slideIn {
    0% {
      display: none;
      opacity: 0;
      transform: translateX(-100px);
    }
    40% {
      display: block;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
export const Facebook = styled(FaFacebook)``;
export const Twitter = styled(FaTwitter)``;
export const Instagram = styled(AiFillInstagram)``;
export const LinkedIn = styled(FaLinkedin)``;
export const Google = styled(AiFillGoogleCircle)``;
