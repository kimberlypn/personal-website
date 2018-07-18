import React from 'react';

/* Renders the project page for Forbidden Island */
export default function ForbiddenIsland() {
  return (
    <p>
      This was a project for my Fundamentals of Computer Science II class. The
      assignment was to design a game with mutable world state, ArrayLists,
      mutable linked data structures, and loops.<br /><br />
      My partner and I built a forbidden island game using the&nbsp;
      <a href="https://www2.ccs.neu.edu/javalib/ImpWorld/">ImpWorld</a>
      &nbsp;library. The user controls a pilot using the arrow keys, and the
      goal is to collect all five targets and make it to the helicopter before
      the island is completely submerged. There are three different maps that
      the user can play, the hardest one being the random terrain map, which was
      generated using a subdivision algorithm.<br /><br />
      This class was my first introduction into the infamous world of Java, so
      I was quite proud of what I had accomplished at the time. Unfortunately,
      this was before I had taken Object-Oriented Design, so if I had to do it
      again, you can definitely expect it'd be a <i>SOLID</i> improvement.
    </p>
  );
}
