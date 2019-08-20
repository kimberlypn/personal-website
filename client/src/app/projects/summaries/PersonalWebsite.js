import React from 'react';

export default React.memo(function PersonalWebsite() {
  return (
    <p className='project-summary'>
      If you like what you see, then I'm glad because this was my third attempt at building a personal website. My&nbsp;
      <a href='https://github.com/kimberlypn/kimberlypn.github.io/tree/v1.0'>first</a> and&nbsp;
      <a href='https://github.com/kimberlypn/personal-website/tree/v2.0'>second</a> attempts now redirect to this one,
      but you can still see what they looked like by checking out their respective GitHub repositories.<br/><br/>
      
      I made the first website when I had just switched into computer science from health science, so it was no surprise
      that after graduating, I wanted to revamp that barebones-HTML-CSS-no-frameworks-not-even-Bootstrap attempt of a
      website into something much more interesting.<br/><br/>
      
      On my second go, I rebuilt my website using the stack I had learned from my Web Development class. My second
      attempt looked much better, but I still was not completely satisfied because I wanted something more minimalistic.
      Off to the drawing board I went, and a few weeks later, I had a single-page application (SPA) with React for the
      UI, Redux for managing client-side application/UI state, and a Postgres database, all wrapped within a Phoenix
      framework.<br/><br/>
      
      ...Then a year passed, and here I am updating my website again. After twelve months of getting my hands dirty with
      "real-world" development experience, I had an itching desire to refactor the React frontend, toss out Redux and
      Phoenix, and rewrite the backend in Node.js using an Express framework. In a way, this website has become a
      reflection of my growth as a developer. Just because I have the degree doesn't mean that the learning should stop!
    </p>
  );
});