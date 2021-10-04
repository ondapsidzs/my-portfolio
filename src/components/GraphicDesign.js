import React, { useState } from "react";

import "../index.css";

import {
  Container,
  Content,
  GraphicDesignGridContainer,
  LeftArrow,
  RightArrow,
  Drawings,
  Logos,
  Posters,
} from "./styles/GraphicDesign.styled";
import Drawing1 from "../images/drawing-1.png";
import Drawing2 from "../images/drawing-2.jpg";
import Drawing3 from "../images/drawing-3.png";
import Drawing4 from "../images/drawing-4.png";
import Drawing5 from "../images/drawing-5.png";
import Drawing6 from "../images/drawing-6.png";
import Drawing7 from "../images/drawing-7.png";
import Drawing8 from "../images/drawing-8.png";
import Drawing9 from "../images/drawing-9.png";
import Logo1 from "../images/logo-1(1).png";
import Logo2 from "../images/logo-2.png";
import Logo3 from "../images/logo-3.png";
import Logo4 from "../images/logo-4.png";
import Logo5 from "../images/logo-5.png";
import Logo6 from "../images/logo-6.png";
import Logo7 from "../images/logo-7.png";
import Logo8 from "../images/logo-8.png";
import Logo9 from "../images/logo-9.png";
import Poster1 from "../images/poster-1.jpg";
import Poster2 from "../images/poster-2.jpg";
import Poster3 from "../images/poster-3.png";
import Poster4 from "../images/poster-4.jpg";
import Poster5 from "../images/poster-5.png";
import Poster6 from "../images/poster-6.png";
import Poster7 from "../images/poster-7.png";
import Poster8 from "../images/poster-8.jpg";
import Poster9 from "../images/poster-9.png";

const GraphicDesign = ({ isActive, viewImage }) => {
  const label = ["Drawings", "Logos", "Posters"];
  let [labelIndex, setLabelIndex] = useState(0);
  let gridContainer = document.getElementById("gridContainer");

  function nextItemHandler() {
    let index = labelIndex;

    if (labelIndex < label.length - 1) {
      index++;
      setLabelIndex(labelIndex + 1);
    } else {
      index = 0;
      setLabelIndex(0);
    }
    gridContainer.style.transform = `translateX(calc(-670px * ${index}))`;
  }

  function prevItemHandler() {
    let index = labelIndex;

    if (labelIndex > 0) {
      index--;
      setLabelIndex(labelIndex - 1);
    } else {
      index = 2;
      setLabelIndex(2);
    }
    gridContainer.style.transform = `translateX(calc(-670px * ${index}))`;
  }

  return (
    <>
      <Container isActive={isActive}>
        <Content>
          <p>
            I drew a lot when I was a kid. I drew cartoons and doodles. And not
            more on to realism.
          </p>
          <br />
          <p>
            Besides drawing cartoonish arts. I also do some photo editings,
            Logos, Posters, Newsletters and etc. I have an eye for aesthetic
            looks.
          </p>
          <br />
          <p>Below are some of my works</p>
          <br />
          <p className="ai-c">
            <LeftArrow onClick={prevItemHandler} />
            <b>{label[labelIndex]}</b>
            <RightArrow onClick={nextItemHandler} />
          </p>
          <div style={{ width: "640px", overflow: "hidden" }}>
            <GraphicDesignGridContainer id="gridContainer">
              <Drawings onClick={viewImage}>
                <div>
                  <img src={Drawing1} alt="drawing-1" />
                </div>
                <div>
                  <img src={Drawing2} alt="drawing-2" />
                </div>
                <div>
                  <img src={Drawing3} alt="drawing-3" />
                </div>
                <div>
                  <img src={Drawing4} alt="drawing-4" />
                </div>
                <div>
                  <img src={Drawing5} alt="drawing-5" />
                </div>
                <div>
                  <img src={Drawing6} alt="drawing-6" />
                </div>
                <div>
                  <img src={Drawing7} alt="drawing-7" />
                </div>
                <div>
                  <img src={Drawing8} alt="drawing-8" />
                </div>
                <div>
                  <img src={Drawing9} alt="drawing-9" />
                </div>
              </Drawings>
              <Logos onClick={viewImage}>
                <div>
                  <img src={Logo1} alt="logo-1" className="contain" />
                </div>
                <div>
                  <img src={Logo2} alt="logo-2" className="bg-black contain" />
                </div>
                <div>
                  <img src={Logo3} alt="logo-3" className="contain" />
                </div>
                <div>
                  <img src={Logo4} alt="logo-4" className="contain" />
                </div>
                <div>
                  <img src={Logo5} alt="logo-5" className="contain" />
                </div>
                <div>
                  <img src={Logo6} alt="logo-6" className="contain" />
                </div>
                <div>
                  <img src={Logo7} alt="logo-7" className="contain" />
                </div>
                <div>
                  <img src={Logo8} alt="logo-8" className="contain" />
                </div>
                <div>
                  <img src={Logo9} alt="logo-9" className="contain" />
                </div>
              </Logos>
              <Posters onClick={viewImage}>
                <div>
                  <img src={Poster1} alt="poster-1" />
                </div>
                <div>
                  <img src={Poster2} alt="poster-2" />
                </div>
                <div>
                  <img src={Poster3} alt="poster-3" />
                </div>
                <div>
                  <img src={Poster4} alt="poster-4" />
                </div>
                <div>
                  <img src={Poster5} alt="poster-5" />
                </div>
                <div>
                  <img src={Poster6} alt="poster-6" />
                </div>
                <div>
                  <img src={Poster7} alt="poster-7" />
                </div>
                <div>
                  <img src={Poster8} alt="poster-8" />
                </div>
                <div>
                  <img src={Poster9} alt="poster-9" />
                </div>
              </Posters>
            </GraphicDesignGridContainer>
            <a href="https://www.dropbox.com/sh/36eu7xl339zdkq5/AABaREE2Wc9SYedmoXkRw_qMa?dl=0">
              <button>Dropbox Portfolio</button>
            </a>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default GraphicDesign;
