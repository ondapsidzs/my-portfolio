import React from "react";

import { Container, Content, Grid } from "./styles/WebDevelopment.styles";

import Image1 from "../images/web-development-1.png";
import Image2 from "../images/web-development-2.png";
import Image3 from "../images/web-development-3.png";
import Image4 from "../images/web-development-4.png";
import Image5 from "../images/web-development-5.png";
import Image6 from "../images/web-development-6.png";
import Image7 from "../images/web-development-7.png";

const WebDevelopment = ({ isActive }) => {
  return (
    <Container isActive={isActive}>
      <Content>
        <p>
          I started learning web development in March 2020. I first studied with
          the basics in web development such as HTML, CSS, and then Javascript.
          Javascript was the hardest among them throughout my first month of
          studying or learning web development. I also learned a little backend
          such as practicing getting data from a database such as Firebase. And
          I studied React JS and SCSS.
          <br />
          <br />
          So far, I can't call myself an expert yet in front-end web
          development, yet I know that with my design skills I could surely
          create beautiful and awesome websites. In addition, I am still
          learning more of these new stuffs, and also would still be willing to
          learn more about Front-End web development. Experience is the best
          teacher, and so hopefully, I would be able to have an experience
          creating projects for a company with a good and healthy environment.
        </p>
        <Grid>
          <div>
            <a href="https://ondapsidzs.github.io/do-done/">
              <img src={Image1} alt="do-done" />
            </a>
          </div>
          <div>
            <a href="https://ondapsidzs.github.io/mee-random-site/">
              <img src={Image2} alt="mee-random" />
            </a>
          </div>
          <div>
            <a href="https://ondapsidzs.github.io/guten-tag-trial/">
              <img src={Image4} alt="do-done" />
            </a>
          </div>
          <div>
            <a href="https://ondapsidzs.github.io/accordion-trial/">
              <img src={Image3} alt="accordion-trial" />
            </a>
          </div>
          <div>
            <a href="https://ondapsidzs.github.io/hello-store/">
              <img src={Image5} alt="hello-store" />
            </a>
          </div>
          <div>
            <a href="https://ondapsidzs.github.io/dom-manipulation-trial/">
              <img src={Image6} alt="dom-manipulation" />
            </a>
          </div>
          <div>
            <a href="https://ondapsidzs.github.io/nuclu/">
              <img src={Image7} alt="nuclu" />
            </a>
          </div>
        </Grid>
      </Content>
    </Container>
  );
};

export default WebDevelopment;
