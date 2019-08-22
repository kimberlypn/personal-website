import React from 'react';

export default React.memo(function MemoryGame() {
  return (
    <p className='project-summary'>
      This was a simple memory game that I built for my Web Development class. There is a 4x4 grid of cards, and behind
      each card is a letter in the range A-H. The goal is to match all eight pairs in as few clicks as possible. Users
      can re-visit their saved games at any time.<br/><br/>
      
      I wrote an <a href='https://github.com/kimberlypn/CS4550/blob/master/memory/lib/memory/game.ex'>Elixir module</a>
      &nbsp;that implements the rules and state transitions for the game, since server-side game logic helps guard
      against unwanted cheating. The server and the browser communicate via WebSockets, which are useful because they
      allow messages to be sent in either direction (as opposed to basic HTTP, which requires the client to initiate
      all of the requests). I also allowed for simultaneous games and saved states. Saved states were achieved via one
      global agent with put/get operations for setting/retrieving game backups.
    </p>
  );
});