import React from 'react';

export default React.memo(function PinnyArcade() {
  return (
    <p className='project-summary'>
      If you have known me for a while (or have talked to me some time around March or April), then you will know that I
      love going to <a href='http://east.paxsite.com/'>PAX East</a>. Specifically, it is the&nbsp;
      <a href='https://www.penny-arcade.com/pinny-arcade/'>Pinny Arcade</a> that keeps me coming back every year. I am a
      sucker for collecting things and an even bigger sucker for organizing— and that is exactly why this project came
      about.<br/><br/>
      
      I wanted to make a website where I could keep track of the dozens of pins that I have collected over the years,
      monitor the market price of each pin, and record all of the trades that took place during the convention.
      <br/><br/>
      
      This website is still in the making since I was overwhelmed with final assignments not too long after starting it.
      Some things that I would like to do are: scrape the Pinny Arcade website for the pin images instead of
      hardcoding them, and use an API to get the market prices of each pin.
    </p>
  );
});