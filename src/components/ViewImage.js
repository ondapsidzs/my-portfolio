import React from "react";

import { Container, Content, Close } from "./styles/ViewImage.styled";

const ViewImage = ({ viewImageFalse, imageRef }) => {
  return (
    <Container>
      <Content>
        <img src={imageRef} alt="" />
      </Content>
      <Close onClick={viewImageFalse} />
    </Container>
  );
};

export default ViewImage;
