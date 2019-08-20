import React from 'react';

export default React.memo(function MazeGame() {
  return (
    <p className='project-summary'>
      This was the second of two projects for my Fundamentals of Computer Science II class. The assignment was to design
      a maze game that could be solved by the user or auto-solved using&nbsp;
      <a href='https://en.wikipedia.org/wiki/Depth-first_search'>depth-first search (DFS)</a>. The starting point is in
      the top-left corner, and the exit (represented by a pink square) is in the bottom-right corner. Users control
      their player (represented by a green square) using the arrow keys and can auto-solve the maze by pressing
      the <i>D</i> key or generate a new maze by pressing the <i>R</i> key. Each maze is different, and the size of the
      maze can be adjusted.<br/><br/>
      
      My teammate and I generated the mazes using&nbsp;
      <a href='https://en.wikipedia.org/wiki/Kruskal%27s_algorithm'>Kruskal's algorithm</a>. Given a graph with&nbsp;
      <i>N</i> nodes and at least <i>N - 1</i> weighted edges, Kruskal's algorithm finds the minimum spanning tree. The
      same minimum spanning tree is generated if the same graph with the same edges and edge costs is fed. Thus, the
      ability to generate random mazes comes from feeding edges with different weights into the algorithm each time it
      is run.
    </p>
  );
});