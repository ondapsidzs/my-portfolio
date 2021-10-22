import { useEffect, useState, useRef } from "react";

import "./App.css";

import { AnimatedContent, Container, Content, LogoIcon } from "./App.styled";
import AppContent from "./components/AppContent";
import Logo from "./images/logo-1.png";
import ViewImage from "./components/ViewImage";
import ViewWebDesign from "./components/ViewWebDesign";

const delayedChange = (index, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let texts = document.querySelectorAll(".bottomHidden");
      let subTexts = document.querySelectorAll(".subDivBottomHidden");
      let animatedContent = document.getElementById("animatedContent");

      if (index === 0) {
        texts[index].classList.add("show");
      } else if (index === 1) {
        texts[index].classList.add("show");
        texts[index - 1].classList.add("topHidden");
      } else if (index === subTexts.length) {
        subTexts[index - 1].classList.add("subDivShow");
        subTexts[index - 2].classList.add("subDivTopHidden");

        setTimeout(() => {
          texts[texts.length - 1].classList.add("topHidden");

          setTimeout(() => {
            animatedContent.style.display = "none";
          }, delay);
        }, delay);
      } else {
        subTexts[index - 1].classList.add("subDivShow");
        subTexts[index - 2].classList.add("subDivTopHidden");
      }

      resolve();
    }, delay);
  });
};

async function animate() {
  let delay = 500;
  await delayedChange(0, delay);
  await delayedChange(1, delay);
  await delayedChange(2, delay);
  await delayedChange(3, delay);
  await delayedChange(4, delay);
  await delayedChange(5, delay);
  await delayedChange(6, delay);
  await delayedChange(7, delay);
  await delayedChange(8, delay);
  await delayedChange(9, delay);
  await delayedChange(10, delay);
}

function App() {
  const [appContentActive, setAppContentActive] = useState(false);
  const [viewImageActive, setViewImageActive] = useState(false);
  const [viewWebDesignActive, setViewWebDesignActive] = useState(false);
  const imageRef = useRef("");
  const arrayRef = useRef(0);

  useEffect(() => {
    animate();

    setTimeout(() => {
      setAppContentActive(true);
    }, 6500);
  }, []);

  function viewImage(e) {
    if (e.target.src) {
      setViewImageActive(true);
      imageRef.current = e.target.src;
    }
  }

  function viewImageFalse() {
    setViewImageActive(false);
  }

  function viewWebDesign(num, imageSrc) {
    setViewWebDesignActive(true);
    arrayRef.current = num;
    imageRef.current = imageSrc;
  }

  function viewWebDesignFalse() {
    setViewWebDesignActive(false);
  }

  window.addEventListener("scroll", () => {
    if (appContentActive) {
      let logoElement = document.querySelector("#logo");

      if (window.scrollY > 0 || document.body.scrollTop > 0) {
        logoElement.style.opacity = 0.2;
      } else {
        logoElement.style.opacity = 1;
      }
    }
  });

  return (
    <>
      <Container>
        <LogoIcon src={Logo} alt="" id="logo" />
        <Content>
          <AnimatedContent id="animatedContent">
            <div>
              <div className="bottomHidden">hello.</div>
              <div className="bottomHidden">
                i am
                <span>
                  <div className="subDivBottomHidden subDivShow">
                    Sidney Ondap.
                  </div>
                  <div className="subDivBottomHidden">a Filipino.</div>
                  <div className="subDivBottomHidden ">a Graphic Designer.</div>
                  <div className="subDivBottomHidden">a Web Designer.</div>
                  <div className="subDivBottomHidden">a Web Developer.</div>
                  <div className="subDivBottomHidden">a Learner.</div>
                  <div className="subDivBottomHidden">a Dreamer.</div>
                  <div className="subDivBottomHidden">a Listener.</div>
                  <div className="subDivBottomHidden">a Gamer.</div>
                  <div className="subDivBottomHidden">a _</div>
                </span>
              </div>
            </div>
          </AnimatedContent>
          <AppContent
            appContentActive={appContentActive}
            viewImage={viewImage}
            viewWebDesign={viewWebDesign}
          />
        </Content>
      </Container>
      {viewImageActive && (
        <ViewImage
          imageRef={imageRef.current}
          viewImageFalse={viewImageFalse}
        />
      )}
      {viewWebDesignActive && (
        <ViewWebDesign
          viewWebDesignFalse={viewWebDesignFalse}
          arrayRef={arrayRef.current}
          imageRef={imageRef.current}
        />
      )}
    </>
  );
}

export default App;
