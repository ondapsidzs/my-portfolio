import React from "react";

import { Container, Content } from "./styles/Blank.styled";

const Blank = ({ isActive }) => {
  return (
    <Container isActive={isActive}>
      <Content>
        <p>
          I can place anything here, probably your first impressions of me
          either seeing/meeting me personally or through my photo, hehe.
        </p>
      </Content>
    </Container>
  );
};

export default Blank;
