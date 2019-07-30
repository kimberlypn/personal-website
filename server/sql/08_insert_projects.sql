INSERT INTO project
(
    title,
    headline,
    technology,
    type,
    collaborators,
    start_date,
    end_date,
    img_src,
    repo,
    demo
)
VALUES
(
    'Forbidden Island',
    'Can you collect all of the targets and fly away in the helicopter before it''s too late?',
    '{
        "Java",
        "ImpWorld"
    }',
    1,
    '{
        "Kimberly Nguyen",
        "Thien Nguyen"
    }',
    '2016-02-01',
    '2016-03-25',
    'forbidden-island.png',
    'https://github.com/kimberlypn/ForbiddenIsland',
    NULL
),
(
    'Goat Jumper',
    'An endless platformer where the goal is to survive for as long as possible',
    '{
        "C++",
        "Box2D",
        "SDL2"
    }',
    1,
    '{
        "Kimberly Nguyen",
        "Max Mindel",
        "Jason Fiammetta",
        "Jerry Leung"
    }',
    '2018-01-30',
    '2018-04-17',
    'goat-jumper.png',
    'https://github.com/kimberlypn/GoatJumper',
    NULL
),
(
    'Kimmy''s Pinny Arcade',
    'Organizing my Pinny Arcade craze',
    '{
        "Elixir",
        "Phoenix",
        "HTML",
        "CSS",
        "Bootstrap",
        "PostgreSQL"
    }',
    2,
    '{
        "Kimberly Nguyen"
    }',
    '2018-04-04',
    NULL,
    'kimmys-pinny-arcade.png',
    'https://github.com/kimberlypn/PinnyArcade',
    NULL
),
(
    'Maze Game',
    'An amazing maze game (with a lesser amazing title)',
    '{
        "Java",
        "ImpWorld"
    }',
    1,
    '{
        "Kimberly Nguyen",
        "Thien Nguyen"
    }',
    '2016-03-26',
    '2016-04-06',
    'maze-game.png',
    'https://github.com/kimberlypn/Mazes',
    NULL
),
(
    'Memory Game',
    'Forgot the rules already? Find all eight matches in as few clicks as possible',
    '{
        "Elixir",
        "Phoenix",
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "PostgreSQL"
    }',
    1,
    '{
        "Kimberly Nguyen"
    }',
    '2018-01-22',
    '2018-02-09',
    'maze-game.png',
    'https://github.com/kimberlypn/CS4550/tree/master/memory',
    'https://memory-card-game.herokuapp.com/'
),
(
    'Personal Website',
    'Déjà vu? (It''s this.)',
    '{
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Express",
        "Node",
        "PostgreSQL"
    }',
    2,
    '{
        "Kimberly Nguyen"
    }',
    '2016-10-28',
    NULL,
    'personal-website.png',
    'https://github.com/kimberlypn/personal-website',
    'https://kimberlypn.herokuapp.com/'
),
(
    'Power Up Gambia',
    'A website dedicated to Power Up Gambia (entry to the Seevak Website Competition)',
    '{
        "JavaScript",
        "HTML",
        "CSS"
    }',
    3,
    '{
        "Kimberly Nguyen",
        "Ivanna Lin",
        "Christina Huang"
    }',
    '2011-09-01',
    '2012-06-01',
    'seevak-pug.jpg',
    NULL,
    'http://www.learntoquestion.com/seevak/groups/2011/sites/power-up-gambia/'
),
(
    'Shambomon',
    'A two-player game inspired by the two classics: Roshambo ("Rock-Paper-Scissors") and Pokémon',
    '{
        "Elixir",
        "Phoenix",
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "PostgreSQL"
    }',
    1,
    '{
        "Kimberly Nguyen",
        "Matthew Dang"
    }',
    '2018-02-20',
    '2018-03-27',
    'shambomon.png',
    'https://github.com/kimberlypn/Shambomon',
    'https://shambomon.herokuapp.com/'
),
(
    'The Jubilee Project',
    'A website dedicated to The Jubilee Project (entry to the Seevak Website Competition)',
    '{
        "JavaScript",
        "HTML",
        "CSS"
    }',
    3,
    '{
        "Kimberly Nguyen",
        "Ivanna Lin",
        "Katherine Kerr"
    }',
    '2012-09-01',
    '2013-06-01',
    'seevak-jp.jpg',
    NULL,
    'http://www.learntoquestion.com/seevak/groups/2012/sites/jubilee/theproject.html'
),
(
    'TravelPal',
    'A social flights application',
    '{
        "Elixir",
        "Phoenix",
        "React",
        "Redux",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "PostgreSQL"
    }',
    1,
    '{
        "Kimberly Nguyen",
        "Matthew Dang",
        "William Guo",
        "Longsheng Lin"
    }',
    '2018-03-27',
    '2018-04-20',
    'travelpal.png',
    'https://github.com/kimberlypn/TravelPal',
    'https://my-travelpal.herokuapp.com/'
);