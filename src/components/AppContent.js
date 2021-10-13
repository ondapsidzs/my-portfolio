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
import WebDevelopment from "./WebDevelopment";
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
  const [webDevelopmentActive, setWebDevelopmentActive] = useState(false);
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

  function webDevelopmentHandler() {
    disableAllHandler();
    setWebDevelopmentActive(!webDevelopmentActive);
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
    setWebDevelopmentActive(false);
  }

  return (
    <Container>
      <Content appContentActive={appContentActive}>
        <div>hello.</div>
        <div className="nw">
          i am{" "}
          <span onClick={sidneyOndapHandler} className="noselect">
            Sidney Ondap.
          </span>
        </div>
        <AboutMe aboutMeActive={aboutMeActive} />
        <div className="nw">
          i am{" "}
          <span onClick={filipinoHandler} className="noselect">
            a Filipino.
          </span>
        </div>
        <Filipino filipinoActive={filipinoActive} />
        <div className="nw">
          i am{" "}
          <span onClick={graphicDesginHandler} className="noselect">
            a Graphic Designer.
          </span>
          <LeftArrow className="red" />
        </div>
        <GraphicDesign isActive={graphicDesignActive} viewImage={viewImage} />
        <div className="nw">
          i am{" "}
          <span onClick={webDesignHandler} className="noselect">
            a Web Designer.
          </span>
          <LeftArrow className="blue" />
        </div>
        <WebDesign isActive={webDesignActive} viewWebDesign={viewWebDesign} />
        <div className="nw">
          i am{" "}
          <span onClick={webDevelopmentHandler} className="noselect">
            a Web Developer.
          </span>
          <LeftArrow className="gold" />
        </div>
        <WebDevelopment isActive={webDevelopmentActive} />
        <div className="nw">
          i am{" "}
          <span onClick={learnerHandler} className="noselect">
            a Learner.
          </span>
        </div>
        <Learner isActive={learnerActive} />
        <div className="nw">
          i am{" "}
          <span onClick={dreamerHandler} className="noselect">
            a Dreamer.
          </span>
        </div>
        <Dreamer isActive={dreamerActive} />
        <div className="nw">
          i am{" "}
          <span onClick={listenerHandler} className="noselect">
            a Listener.
          </span>
        </div>
        <Listener isActive={listenerActive} />
        <div className="nw">
          i am{" "}
          <span onClick={gamerHandler} className="noselect">
            a Gamer.
          </span>
        </div>
        <Gamer isActive={gamerActive} />
        <div className="nw">
          i am{" "}
          <span onClick={blankHandler} className="noselect">
            a _
          </span>
        </div>
        <Blank isActive={blankActive} />
      </Content>
      <Contact appContentActive={appContentActive}>
        <h1>contact me</h1>
        <div>
          <a href="https://www.facebook.com/sidney.ondap">
            <Facebook />
          </a>
          <a href="https://twitter.com/OndapOndap">
            <Twitter />
          </a>
          <a href="https://www.instagram.com/sidneyondap/">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/in/sidney-ondap-467b57222?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSrQYVvdOTLeUrWSjaDqhYg%3D%3D">
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
