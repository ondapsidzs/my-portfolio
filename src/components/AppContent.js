import React, { useState } from "react";

import {
  Container,
  Content,
  LeftArrow,
  Contact,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Google,
} from "./styles/AppContent.styled";
import AboutMe from "./AboutMe";
import Filipino from "./Filipino";
import GraphicDesign from "./GraphicDesign";
import WebDesign from "./WebDesign";
import Learner from "./Learner";
import Dreamer from "./Dreamer";
import Listener from "./Listener";
import Gamer from "./Gamer";
import Blank from "./Blank";

const AppContent = ({ appContentActive, viewImage, viewWebDesign }) => {
  const [aboutMeActive, setAboutMeActive] = useState(false);
  const [filipinoActive, setFilipinoActive] = useState(false);
  const [graphicDesignActive, setGraphicDesignActive] = useState(false);
  const [webDesignActive, setWebDesignActive] = useState(false);
  const [learnerActive, setLearnerActive] = useState(false);
  const [dreamerActive, setDreamerActive] = useState(false);
  const [listenerActive, setListenerActive] = useState(false);
  const [gamerActive, setGamerActive] = useState(false);
  const [blankActive, setBlankActive] = useState(false);

  function sidneyOndapHandler() {
    disableAllHandler();
    setAboutMeActive(!aboutMeActive);
  }

  function filipinoHandler() {
    disableAllHandler();
    setFilipinoActive(!filipinoActive);
  }

  function graphicDesginHandler() {
    disableAllHandler();
    setGraphicDesignActive(!graphicDesignActive);
  }

  function webDesignHandler() {
    disableAllHandler();
    setWebDesignActive(!webDesignActive);
  }

  function learnerHandler() {
    disableAllHandler();
    setLearnerActive(!learnerActive);
  }

  function dreamerHandler() {
    disableAllHandler();
    setDreamerActive(!dreamerActive);
  }

  function listenerHandler() {
    disableAllHandler();
    setListenerActive(!listenerActive);
  }

  function gamerHandler() {
    disableAllHandler();
    setGamerActive(!gamerActive);
  }

  function blankHandler() {
    disableAllHandler();
    setBlankActive(!blankActive);
  }

  function disableAllHandler() {
    setAboutMeActive(false);
    setFilipinoActive(false);
    setGraphicDesignActive(false);
    setWebDesignActive(false);
    setLearnerActive(false);
    setDreamerActive(false);
    setListenerActive(false);
    setGamerActive(false);
    setBlankActive(false);
  }

  return (
    <Container>
      <Content appContentActive={appContentActive}>
        <div>hello.</div>
        <div className="nw">
          i am <span onClick={sidneyOndapHandler}>Sidney Ondap.</span>
        </div>
        <AboutMe aboutMeActive={aboutMeActive} />
        <div className="nw">
          i am <span onClick={filipinoHandler}>a Filipino.</span>
        </div>
        <Filipino filipinoActive={filipinoActive} />
        <div className="nw">
          i am <span onClick={graphicDesginHandler}>a Graphic Designer.</span>
          <LeftArrow className="red" />
        </div>
        <GraphicDesign isActive={graphicDesignActive} viewImage={viewImage} />
        <div className="nw">
          i am <span onClick={webDesignHandler}>a Web Designer.</span>
          <LeftArrow className="blue" />
        </div>
        <WebDesign isActive={webDesignActive} viewWebDesign={viewWebDesign} />
        <div className="nw">
          i am <span>a Web Developer.</span>
          <LeftArrow className="gold" />
        </div>
        <div className="nw">
          i am <span onClick={learnerHandler}>a Learner.</span>
        </div>
        <Learner isActive={learnerActive} />
        <div className="nw">
          i am <span onClick={dreamerHandler}>a Dreamer.</span>
        </div>
        <Dreamer isActive={dreamerActive} />
        <div className="nw">
          i am <span onClick={listenerHandler}>a Listener.</span>
        </div>
        <Listener isActive={listenerActive} />
        <div className="nw">
          i am <span onClick={gamerHandler}>a Gamer.</span>
        </div>
        <Gamer isActive={gamerActive} />
        <div className="nw">
          i am <span onClick={blankHandler}>a _</span>
        </div>
        <Blank isActive={blankActive} />
      </Content>
      <Contact appContentActive={appContentActive}>
        <h1>contact me</h1>
        <div>
          <a href="/">
            <Facebook />
          </a>
          <a href="/">
            <Twitter />
          </a>
          <a href="/">
            <Instagram />
          </a>
          <a href="/">
            <LinkedIn />
          </a>
          <a href="/">
            <Google />
          </a>
        </div>
      </Contact>
    </Container>
  );
};

export default AppContent;
