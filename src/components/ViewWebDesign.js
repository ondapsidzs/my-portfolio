import React from "react";

import { Container } from "./styles/ViewWebDesign.styled";

const ViewWebDesign = ({ viewWebDesignFalse, arrayRef, imageRef }) => {
  const webDesignObject = [
    {
      h1: "Army of Me",
      p: "A web design for Made in Mars. AOM is a website offering virtual services for big and small businesses",
      href: "https://www.dropbox.com/sh/psuukiqvcle2tdq/AACI2hBaaLau5SPEPLXAjr22a?dl=0",
    },
    {
      h1: "Tawa",
      p: "A web design for Made in Mars. Tawa offers equipments for the elderly and disabled.",
      href: "https://www.dropbox.com/sh/vxn5ne49bzxxso8/AABreQ-_F7lwnnFRvXCqoq6Ga?dl=0",
    },
    {
      h1: "Youtube Redesign",
      p: "A personal redesign of mine for Youtube.",
      href: "https://www.dropbox.com/sh/0hx6g5fpuy2gjxp/AABMm6mmm_8aYgOKsddu_8m5a?dl=0",
    },
    {
      h1: "Facebook Redesign",
      p: "A personal redesign of mine for Facebook.",
      href: "https://www.dropbox.com/sh/0hx6g5fpuy2gjxp/AABMm6mmm_8aYgOKsddu_8m5a?dl=0",
    },
    {
      h1: "SCSK8",
      p: "A web design for Made in Mars. SCSK8 is a shop offering high quality skateboards.",
      href: "https://www.dropbox.com/sh/l8burqpsl04cdlj/AAAMQ2zQQgo9GUHg7XO7Qc0ia?dl=0",
    },
    {
      h1: "MEE",
      p: "A personal web design. This MEE site isn't really about me but just some random stuffs which was also used as my practice on basic HTML, CSS, and JS.",
      href: "https://www.dropbox.com/sh/4z17cqxxkkl767c/AAA9XqSsvtn5iZTshVD0MBAva?dl=0",
    },
    {
      h1: "IO",
      p: "A web design for my father's portfolio as a furniture designer.",
      href: "https://www.dropbox.com/sh/g973fblb5vegsdq/AAB9tNlXuTx_mK0UjKL6ieX9a?dl=0",
    },
    {
      h1: "Nuclu",
      p: "A web design for Made in Mars. Nuclu is a B2B website.",
      href: "https://www.dropbox.com/sh/3lqgiiyqzbhmskp/AACidfkJY2G70JrVvvfsHiCra?dl=0",
    },
  ];

  return (
    <>
      <Container onClick={viewWebDesignFalse}>
        <h1 onClick={() => console.log(arrayRef.current)}>
          {webDesignObject[arrayRef]["h1"]}
        </h1>
        <p>{webDesignObject[arrayRef]["p"]}</p>
        <a href={webDesignObject[arrayRef]["href"]}>
          <button>View this portfolio in dropbox</button>
        </a>
        <img src={imageRef} alt="web design" />
      </Container>
    </>
  );
};

export default ViewWebDesign;
