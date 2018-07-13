# Personal Website

## Introduction
This is my third attempt at a personal website. See [1](https://github.com/kimberlypn/kimberlypn.github.io/tree/v1.0)
and [2](https://github.com/kimberlypn/personal-website/tree/v2.0) for previous
attempts.

For my first attempt, I started with just the barebones of HTML, CSS, and
JavaScript because that was all I knew at the time. After graduating, I had a
lot more tools in my tool kit, so I decided to spice things up with some React.
Although there was an improvement, I was not satisfied with the aesthetics and
wanted to take a more minimalistic route. I also realized half-way through that
storing my projects in a database would have been a lot more efficient.

Thus leads us to this final version, which I am finally happy with. My website
is now a single-page application (SPA) with React for the UI, Redux for
managing client-side application/UI state, and a Postgres database, all wrapped
within a Phoenix framework. 

## How to Run Locally
1. Pull this repository
2. Install dependencies with `mix deps.get`
3. Create and migrate the database with `mix ecto.create && mix ecto.migrate`
4. Populate the dev database `mix run priv/repo/seeds.exs`
5. Install Node.js dependencies with `cd assets && npm install`
6. Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.
