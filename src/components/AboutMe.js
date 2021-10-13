import React from "react";

import { Container, Content } from "./styles/AboutMe.styled";

import MyPicture from "../images/compressed-jpg/me.jpg";

const AboutMe = ({ aboutMeActive }) => {
  return (
    <Container aboutMeActive={aboutMeActive}>
      <Content>
        <p>
          My name is <b>Sidney Ondap</b>. I am 23 years old. Still young. I was
          born on November 28. Graduated in University of San Carlos with a
          Bachelor's Degree in Civil Engineering.
        </p>
        <div>
          <img src={MyPicture} alt="Me" />
        </div>
        <p>This is me.</p>
      </Content>
    </Container>
  );
};

export default AboutMe;
