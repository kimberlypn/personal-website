import React from 'react';

/* Renders the project page for Maze Game */
export default function MazeGame() {
  return (
    <p>
      This was the second of two projects for my Fundamentals of Computer
      Science II class. The assignment was to design a maze game that could be
      solved by the user or auto-solved using&nbsp;
      <a href="https://en.wikipedia.org/wiki/Depth-first_search">depth-first
      search (DFS)</a>. The starting point is in the top-left corner, and the
      exit (represented by a pink square) is at the bottom-right corner. Users
      control their player (represented by a green square) using the arrow keys
      and can auto-solve the maze by pressing the "D" key or generate a new maze
      by pressing the "R" key. Every maze is different, and the size of the maze
      can be adjusted.<br /><br />
      My partner and I generated the mazes using&nbsp;
      <a href="https://en.wikipedia.org/wiki/Kruskal%27s_algorithm">Kruskal's algorithm</a>.
      Given a graph with <i>N</i> nodes and at least <i>N - 1</i> weighted
      edges, Kruskal's algorithm will find the minimum spanning tree. The same
      minimum spanning tree is generated if the same graph with the same edges
      and edge costs is fed. Thus, the ability to generate random mazes comes
      from feeding edges with different weights into the algorithm each time we
      run it.
    </p>
  );
}
