import React from 'react';

export const MemoryGame = () => (
  <p>
    This was a simple memory game that I built for my Web Development class.
    There is a 4x4 grid of cards, and behind each card is a letter in the
    range A-H. The goal of the game is to match all eight pairs in as few
    clicks as possible. Users can re-visit their saved game at any time.<br/><br/>
    I wrote an&nbsp;
    <a href='https://github.com/kimberlypn/CS4550/blob/master/memory/lib/memory/game.ex'>Elixir module</a>
    &nbsp;that implements the rules and state transitions
    for the game, since server-side game logic guards against unwanted cheating
    (at least in its simplest form). The server and the browser communicate
    via websockets, which are useful because they allow messages to be sent in
    either direction (as opposed to basic HTTP, which requires that the client
    initiate all of the requests). I also allow for simultaneous games and
    saved states. Saved states were achieved via one global agent with put/get
    operations for setting/retrieving game backups.
  </p>
);
