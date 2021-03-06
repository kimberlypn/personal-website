import React from 'react';

export default React.memo(function Shambomon() {
  return (
    <p className='project-summary'>
      This was the first of two projects for my Web Development class. The assignment was to build a multi-player
      computer game with a web browser interface. My teammate and I decided to take a simple game such as&nbsp;
      <a href='https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors'>Roshambo</a> and give it a little '90s
      flare by fusing it with <a href='https://en.wikipedia.org/wiki/Pok%C3%A9mon'>Pokémon</a>. Hence,
      Shambomon.<br/><br/>
      
      Users have a choice of twelve different Pokémon to play as. The attack buttons correspond to the familiar rock,
      paper, and scissors, but we added additional features such as attack multipliers and a special attack that can
      deal a heavy blow if successful. There is also a leaderboard where users can view their match histories and
      ranking.
    </p>
  );
});