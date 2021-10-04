import React from "react";

import {
  Container,
  Content,
  Cebu,
  Humba,
  Lechon,
} from "./styles/Filipino.styled";
import CebuImage from "../images/cebu.jpg";
import HumbaImage from "../images/humba.jpg";
import LechonImage from "../images/lechon.jpg";

const Filipino = ({ filipinoActive }) => {
  return (
    <Container isActive={filipinoActive}>
      <Content>
        <Cebu src={CebuImage} alt="Cebu" />
        <p>I was born in Cebu, Philippines.</p>
        <p>I am a Cebuano.</p>
        <p>
          I rarely know the names of every place in Cebu because I don't go out
          most of the time.
        </p>
        <div>
          <Humba src={HumbaImage} alt="Humba" className="w-150" />
          <Lechon src={LechonImage} alt="Lechon" className="ml w-150" />
        </div>
        <p>
          What I love in Cebu? The food of course, most especially Humba and
          Lechon.
        </p>
        <p>The beaches are so nice as well.</p>
        <p>
          Once again, I am a Cebuano and a proud <b>Filipino</b>.
        </p>
      </Content>
    </Container>
  );
};

export default Filipino;
