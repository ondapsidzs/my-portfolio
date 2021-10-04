import React from "react";

import { Container, Content } from "./styles/Gamer.styled";

const Gamer = ({ isActive }) => {
  return (
    <Container isActive={isActive}>
      <Content>
        <p>
          I really love playing Games. If you have read the "I am a Dreamer"
          section, I also love watching people's gameplay.
        </p>
        <br />
        <p>
          Playing games, really makes me happy, except when lag comes in and
          destroy my games. In times of being burnt out or being tired, playing
          games helps me stand up most of the time. Another reason, why I love
          playing games is the creativity in each and every game. Different art
          styles in games helps my brain to be more creative. And it also helps
          me think of ideas that I could probably use in my own game in the
          future.
        </p>
        <br />
        <p>
          Right now, the game that I currently play is Valorant, I am only in
          Gold 3 Rank due to lag issues which stops me from joining ranked
          matches sadly. But my game iq is high and my aim is crispy tho.
        </p>
        <br />
        <p>
          As of now, I only put less time to playing games, because I need to
          focus on building up my future, through this Front End Web
          Development, and then studying to become a Game Developer in the
          future.
        </p>
      </Content>
    </Container>
  );
};

export default Gamer;
