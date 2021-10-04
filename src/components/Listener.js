import React from "react";

import { Container, Content } from "./styles/Listener.styled";

const Listener = ({ isActive }) => {
  return (
    <Container isActive={isActive}>
      <Content>
        <p>
          I am an introvert. I am the most silent amongst my friends. I don't
          really talk much but<b> I listen more</b>. I really love music, as an
          introvert, I feel safe or relaxed when listening to music. In relation
          to music, the only music genre I don't listen to is Country music. You
          would probably dislike my playlist, because it sometimes goes from
          Pop, Dubstep, Hip Hop, Classic and more. Twenty One Pilots is my most
          favorite band, next would be Eminem, then Lil Nas X, and then
          Beethoven.
        </p>
        <br />
        <p>
          But I really want to change or probably balance it out. I want to
          listen more but also at the same time, talk more. Ever since growing
          up, and also seeing videos on Youtube, communication is almost the key
          to everything as far as I know. From Powerpoint Reporting to Real
          Estate, communication makes everything to work out well.
        </p>
      </Content>
    </Container>
  );
};

export default Listener;
