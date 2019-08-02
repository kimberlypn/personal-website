# Personal Website

My website can be visited at: https://kimberlypn.herokuapp.com/. 

(It takes a few seconds to load since I am using Heroku's free tier.)

## Introduction
This is my third attempt at a personal website. See [1](https://github.com/kimberlypn/kimberlypn.github.io/tree/v1.0)
and [2](https://github.com/kimberlypn/personal-website/tree/v2.0) for previous attempts.

For my first attempt, I started with just the barebones of HTML, CSS, and JavaScript because that was all I knew at the 
time. After graduating, I had a lot more tools under my belt, so I decided to spice things up with some React. Although 
there was an improvement, I was not satisfied with the aesthetics and wanted to take a more minimalistic route. I also 
realized halfway through that storing my projects in a database would have been a lot more efficient. This lead to a 
single-page application (SPA) with React for the UI, Redux for managing client-side application/UI state, and a Postgres 
database, all wrapped within a Phoenix framework.

Shortly after finishing, I landed my first postgradute job. After a year of heavily working with React, I had an itching 
desire to refactor the React frontend with my newfound knowledge and rewrite the backend in Node.js using an Express 
framework, which is what I have today.

This website has essentially become a reflection of my growth as a developer, so you can bet that this won't be the last 
time that I update this README!

## How to Run Locally
1. Pull this repository
2. Create a database whose owner is `personal_website`
3. Execute all of the SQL statements under `server/sql` in order
2. Install the backend dependencies with `npm install`
3. Start the Node server with `npm start`
4. Install the frontend dependencies with `cd client && npm install`
5. Start the React application with `npm start`

Now you can visit [`localhost:3000`](http://localhost:3000) from your browser.