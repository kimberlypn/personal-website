import React from 'react';

/* Renders the project page for Goat Jumper */
export default function GoatJumper() {
  return (
    <p>
      This was a project for my Programming in C++ class. The assignment was to
      build an interactive application that takes frequent user input and
      updates the state of the program, using at least one "advanced" feature
      that requires an additional API, library, or SDK. We chose to make an
      endless platformer where users get to play as a goat, as goats were an
      ongoing joke started by our professor (this one's for you, Vidoje!).<br /><br />
      Users control the goat via the arrow keys and can play on three different
      maps. Each map has a different set of enemies, and the speed and quantity
      of the platforms and enemies increase over time. Score is measured in
      terms of seconds survived.<br /><br />
      We built our game using an MVC framework. We used&nbsp;
      <a href="http://box2d.org/">Box2D</a>, a really cool 2D physics engine for
      games, for our model and&nbsp;
      <a href="https://www.libsdl.org/download-2.0.php">SDL2</a> for our view.
      We also used a subset of SDL2 called&nbsp;
      <a href="https://www.libsdl.org/projects/SDL_mixer/">SDL_Mixer</a>
      &nbsp;for audio effects.
    </p>
  );
}
