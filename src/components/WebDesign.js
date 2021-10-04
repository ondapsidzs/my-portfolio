import React from "react";

import {
  Container,
  Content,
  WebDesignContainer,
  WebDesigns,
} from "./styles/WebDesign.styled";

import WebDesign1 from "../images/web-design-1.png";
import WebDesign2 from "../images/web-design-2.png";
import WebDesign4 from "../images/web-design-4.png";
import WebDesign5 from "../images/web-design-5.png";
import WebDesign6 from "../images/web-design-6.png";
import WebDesign7 from "../images/web-design-7.png";
import WebDesign8 from "../images/web-design-8.png";
import WebDesign9 from "../images/web-design-9.png";

const WebDesign = ({ isActive, viewWebDesign }) => {
  return (
    <>
      <Container isActive={isActive}>
        <Content>
          <p>
            In web designing, I use Figma Software to design. I prefer Figma for
            a reason that this was the software I first started with.
          </p>
          <br />
          <p>Below are some of my Web Designs.</p>
          <WebDesignContainer>
            <WebDesigns>
              <div>
                <h1>Army of Me</h1>
                <p>
                  A web design for Made in Mars. AOM is a website offering
                  virtual services for big and small businesses.
                </p>
                <a href="https://www.dropbox.com/sh/psuukiqvcle2tdq/AACI2hBaaLau5SPEPLXAjr22a?dl=0">
                  <button>Click to view all designs for this.</button>
                </a>
              </div>
              <img
                src={WebDesign1}
                alt="web-design-1"
                onClick={() => viewWebDesign(0, WebDesign1)}
              />
            </WebDesigns>
            <WebDesigns>
              <div>
                <h1>Tawa</h1>
                <p>
                  A web design for Made in Mars. Tawa offers equipments for the
                  elderly and disabled.
                </p>
                <a href="https://www.dropbox.com/sh/vxn5ne49bzxxso8/AABreQ-_F7lwnnFRvXCqoq6Ga?dl=0">
                  <button>Click to view all designs for this.</button>
                </a>
              </div>
              <img
                src={WebDesign2}
                alt="web-design-2"
                onClick={() => viewWebDesign(1, WebDesign2)}
              />
            </WebDesigns>
            <WebDesigns>
              <div>
                <h1>Youtube Redesign</h1>
                <p>A personal redesign of mine for Youtube.</p>
                <a href="https://www.dropbox.com/sh/0hx6g5fpuy2gjxp/AABMm6mmm_8aYgOKsddu_8m5a?dl=0">
                  <button>Click to view all designs for this.</button>
                </a>
              </div>
              <img
                src={WebDesign4}
                alt="web-design-4"
                onClick={() => viewWebDesign(2, WebDesign4)}
              />
            </WebDesigns>
            <WebDesigns>
              <div>
                <h1>Facebook Redesign</h1>
                <p>A personal redesign of mine for Facebook.</p>
                <a href="https://www.dropbox.com/sh/0hx6g5fpuy2gjxp/AABMm6mmm_8aYgOKsddu_8m5a?dl=0">
                  <button>Click to view all designs for this.</button>
                </a>
              </div>
              <img
                src={WebDesign5}
                alt="web-design-5"
                onClick={() => viewWebDesign(3, WebDesign5)}
              />
            </WebDesigns>
            <WebDesigns>
              <div>
                <h1>SCSK8</h1>
                <p>
                  A web design for Made in Mars. SCSK8 is a shop offering high
                  quality skateboards.
                </p>
                <a href="https://www.dropbox.com/sh/l8burqpsl04cdlj/AAAMQ2zQQgo9GUHg7XO7Qc0ia?dl=0">
                  <button>Click to view all designs for this.</button>
                </a>
              </div>
              <img
                src={WebDesign6}
                alt="web-design-6"
                onClick={() => viewWebDesign(4, WebDesign6)}
              />
            </WebDesigns>
            <WebDesigns>
              <div>
                <h1>MEE</h1>
                <p>
                  A personal web design. This MEE site isn't really about me but
                  just some random stuffs which was also used as my practice on
                  basic HTML, CSS, and JS.
                </p>
                <a href="https://www.dropbox.com/sh/4z17cqxxkkl767c/AAA9XqSsvtn5iZTshVD0MBAva?dl=0">
                  <button>Click to view all designs for this.</button>
                </a>
              </div>
              <img
                src={WebDesign7}
                alt="web-design-7"
                onClick={() => viewWebDesign(5, WebDesign7)}
              />
            </WebDesigns>
            <WebDesigns>
              <div>
                <h1>IO</h1>
                <p>
                  A web design for my father's portfolio as a furniture
                  designer.
                </p>
                <a href="https://www.dropbox.com/sh/g973fblb5vegsdq/AAB9tNlXuTx_mK0UjKL6ieX9a?dl=0">
                  <button>Click to view all designs for this.</button>
                </a>
              </div>
              <img
                src={WebDesign8}
                alt="web-design-8"
                onClick={() => viewWebDesign(6, WebDesign8)}
              />
            </WebDesigns>
            <WebDesigns>
              <div>
                <h1>Nuclu</h1>
                <p>A web design for Made in Mars. Nuclu is a B2B website.</p>
                <a href="https://www.dropbox.com/sh/3lqgiiyqzbhmskp/AACidfkJY2G70JrVvvfsHiCra?dl=0">
                  <button>Click to view all designs for this.</button>
                </a>
              </div>
              <img
                src={WebDesign9}
                alt="web-design-9"
                onClick={() => viewWebDesign(7, WebDesign9)}
              />
            </WebDesigns>
          </WebDesignContainer>
          <a href="https://www.dropbox.com/sh/bgmoeqc9u0tmiuc/AABcU3Vs7cs9lTV-G1rkWijNa?dl=0">
            <button>Dropbox Portfolio</button>
          </a>
        </Content>
      </Container>
    </>
  );
};

export default WebDesign;
