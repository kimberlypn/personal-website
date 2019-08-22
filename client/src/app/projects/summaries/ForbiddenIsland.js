import React from 'react';

export default React.memo(function ForbiddenIsland() {
  return (
    <p className='project-summary'>
      This was the first of two projects for my Fundamentals of Computer Science II class. The assignment was to design
      a game with mutable world state, ArrayLists, mutable linked data structures, and loops.<br/><br/>
      
      My teammate and I built a forbidden island game using the&nbsp;
      <a href='https://www2.ccs.neu.edu/javalib/ImpWorld/'>ImpWorld</a> library. Using the arrow keys to control a
      pilot, users must collect all five targets and make it to the helicopter before the island is completely
      submerged. There are three different maps that users can play, the hardest one being the random terrain map, which
      is generated using a subdivision algorithm.<br/><br/>
      
      This class was my first introduction to the infamous world of Java, so I was quite proud of what I had
      accomplished at the time. Unfortunately, this was before I had taken Object-Oriented Design, so if I had to do it
      again, you can definitely expect it'd be a <i>SOLID</i> improvement.
    </p>
  );
});