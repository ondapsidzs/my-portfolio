import React from "react";

import { Container, Content } from "./styles/Dreamer.styled";

const Dreamer = ({ isActive }) => {
  return (
    <Container isActive={isActive}>
      <Content>
        <p>
          Since, I am a human, I have a lot of dreams too. I recently graduated
          Civil Engineering in just 5 years with no failing grades, and sadly,
          with no honors. But it isn't really the career I dream to have. I
          dream to become a <b>Game Developer</b>, since way back then, my
          brother and I have watched Pewdiepie in Youtube playing different kind
          of games, and that probably someday, hopefully someday, he could play
          the games I'm creating.
        </p>
        <br />
        <p>
          I feel a bit stupid because I could've done something 5 or 4 years ago
          which could really place me in the path to my dreams. Well, past is
          past, all I could do is do something right now that could change my
          future, and that's why I first start with Front End Web Development
          since it's a bit easier and I also have a background in graphic
          designing. Then at breaks, I'm learning Game Development one step at a
          time.
        </p>
        <br />
        <p>
          Well that's a dream career right there. And there's more of what I
          dream of, such as buying my own house and car in my 20s, traveling
          around the world with my family, giving back to others especially to
          my parents who really did a lot for my brother and I, and there's many
          more.
        </p>
      </Content>
    </Container>
  );
};

export default Dreamer;
