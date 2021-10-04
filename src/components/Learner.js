import React from "react";

import { Container, Content } from "./styles/Learner.styled";

const Learner = ({ isActive }) => {
  return (
    <Container isActive={isActive}>
      <Content>
        <p>
          For <b>Graphic Designing</b>, I've been drawing since I was a kid,
          started with traditional way of drawing which is through paper and
          pen, and right now, I use the softwares, Photoshop and Illustrator,
          for drawing and photo edits. I learned how to use these softwares and
          also how to improve my art and design skills through Google and
          Youtube.
        </p>
        <br />
        <p>
          For <b>Web Designing</b>, I both use Photoshop and Figma to create my
          designs. Youtube also helped me in learning how to use and how to be
          good with Figma, and also how to create some awesome web designs.
        </p>
        <br />
        <p>
          For <b>Web Development</b>, I learned this skill with Youtube and also
          with the help of Udemy Courses. As far as I now, I started learning
          this web development skill in the last week of February 2021. I first
          went with the basics: HTML, CSS, and Javascript. I did some practices
          in creating my website using these basics and I did good. After about
          3 months or so, I started learning Reacts JS. It was confusing at
          first, but with research and practice, I feel good with my React JS
          skill.
        </p>
        <br />
        <p>
          I am always willing to learn new stuffs. At first, I really do hate
          reading books, but right now, I'm trying to change that by reading
          more. Right now, I'm even trying to learn Investing and Stock Trading.
          I am also going to start learning Game Development, since that is my
          dream career.
        </p>
      </Content>
    </Container>
  );
};

export default Learner;
