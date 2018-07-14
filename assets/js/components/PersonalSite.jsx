import React from 'react';

/* Renders the project page for Personal Website */
export default function PersonalSite() {
  return (
    <p>
      If you like what you see, then I'm glad because this was my third attempt
      at building a personal website. My&nbsp;
      <a href="https://github.com/kimberlypn/kimberlypn.github.io/tree/v1.0">first</a>
      &nbsp;and&nbsp;
      <a href="https://github.com/kimberlypn/personal-website/tree/v2.0">second</a>
      &nbsp;websites now redirect to this one, but you can still see what they
      looked like by checking out their respective GitHub repositories.<br /><br />
      I made the first website when I had just switched into CS from health
      science, so it was no surprise that after graduating, I wanted to revamp
      this barebones-HTML-CSS-no-frameworks-not-even-Bootstrap attempt of a
      website into something much more interesting.<br /><br />
      On my second go, I rebuilt my website using the stack I had learned from
      my Web Development class. My second attempt looked much better, but I
      still was not completely satisfied because I wanted something more
      minimalistic. Off to the drawing board I went, and a few weeks later, we
      now have this: a single-page application (SPA) with React for the UI,
      Redux for managing client-side application/UI state, and a Postgres
      database, all wrapped within a Phoenix framework.
    </p>
  );
}
