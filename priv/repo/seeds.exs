# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     PersonalWebsite.Repo.insert!(%PersonalWebsite.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

defmodule Seeds do
  alias PersonalWebsite.Repo
  alias PersonalWebsite.Projects.Project
  alias PersonalWebsite.Skills.Skill
  alias PersonalWebsite.Experiences.Experience

  def insert_projects do
    Repo.delete_all(Project)

    Repo.insert!(%Project{
      title: "Shambomon",
      headline: "A two-player game inspired by the two classics: Roshambo
        (\"Rock-Paper-Scissors\") and Pokémon",
      language: "Elixir",
      technology: "Elixir, Phoenix, HTML, CSS, Bootstrap, JavaScript, React,
        PostgreSQL, Node.js",
      type: "Class",
      collaborators: "Kimberly Nguyen, Matt Dang",
      start_date: ~D[2018-02-20],
      end_date: ~D[2018-03-27],
      img_src: "shambomon.png",
      repo: "https://github.com/kimberlypn/Shambomon",
      demo: "https://shambomon.kimberlypn.com/"
    })
    Repo.insert!(%Project{
      title: "Goat Jumper",
      headline: "An endless platformer where the goal is to survive for as long
        as possible",
      language: "C++",
      technology: "C++, SDL2, Box2D",
      type: "Class",
      collaborators: "Kimberly Nguyen, Max Mindel, Jason Fiammetta, Jerry Leung",
      start_date: ~D[2018-01-30],
      end_date: ~D[2018-04-17],
      img_src: "goat-jumper.png",
      repo: "https://github.com/kimberlypn/GoatJumper"
    })
    Repo.insert!(%Project{
      title: "TravelPal",
      headline: "A social flights application",
      language: "Elixir",
      technology: "Elixir, Phoenix, HTML, CSS, Bootstrap, JavaScript, React,
        Redux, PostgreSQL, Node.js",
      type: "Class",
      collaborators: "Kimberly Nguyen, Longsheng Lin, Matt Dang, William Guo",
      start_date: ~D[2018-03-27],
      end_date: ~D[2018-04-20],
      img_src: "travelpal.png",
      repo: "https://github.com/kimberlypn/TravelPal",
      demo: "https://travelpal.kimberlypn.com/"
    })
    Repo.insert!(%Project{
      title: "Personal Website",
      headline: "Déjà vu? (It's this.)",
      language: "Elixir",
      technology: "Elixir, Phoenix, HTML, CSS, Bootstrap, JavaScript, React,
        Redux, PostgreSQL, Node.js",
      type: "Personal",
      collaborators: "Kimberly Nguyen",
      start_date: ~D[2018-07-10],
      end_date: ~D[2018-07-13],
      img_src: "personal-website.png",
      repo: "https://github.com/kimberlypn/personal-website",
      demo: "https://www.kimberlypn.com/"
    })
    Repo.insert!(%Project{
      title: "Kimmy's Pinny Arcade",
      headline: "Organizing my Pinny Arcade craze",
      language: "Elixir",
      technology: "Elixir, Phoenix, HTML, CSS, Bootstrap, PostgreSQL, Node.js",
      type: "Personal",
      collaborators: "Kimberly Nguyen",
      start_date: ~D[2018-04-04],
      end_date: ~D[2018-04-06],
      img_src: "kimmys-pinny-arcade.png",
      repo: "https://github.com/kimberlypn/PinnyArcade"
    })
    Repo.insert!(%Project{
      title: "Forbidden Island",
      headline: "Can you collect all the targets and fly away in the helicopter
        before it's too late?",
      language: "Java",
      technology: "Java, ImpWorld",
      type: "Class",
      collaborators: "Kimberly Nguyen, Thien Nguyen",
      start_date: ~D[2016-03-26],
      end_date: ~D[2016-04-06],
      img_src: "forbidden-island.png",
      repo: "https://github.com/kimberlypn/ForbiddenIsland"
    })
    Repo.insert!(%Project{
      title: "Maze Game",
      headline: "An amazing maze game (with a lesser amazing title)",
      language: "Java",
      technology: "Java, ImpWorld",
      type: "Class",
      collaborators: "Kimberly Nguyen, Thien Nguyen",
      start_date: ~D[2016-03-26],
      end_date: ~D[2016-04-06],
      img_src: "maze-game.png",
      repo: "https://github.com/kimberlypn/Mazes"
    })
    Repo.insert!(%Project{
      title: "Memory Game",
      headline: "A memory game where the goal is to find all eight matches in
        as few clicks as possible",
      language: "Elixir",
      technology: "Elixir, Phoenix, HTML, CSS, Bootstrap, JavaScript, React,
        Node.js",
      type: "Class",
      collaborators: "Kimberly Nguyen",
      start_date: ~D[2016-03-26],
      end_date: ~D[2016-04-06],
      img_src: "memory-game.png",
      repo: "https://github.com/kimberlypn/CS4550/tree/master/memory",
      demo: "https://memory.kimberlypn.com/"
    })
    Repo.insert!(%Project{
      title: "The Jubilee Project",
      headline: "A website dedicated to The Jubilee Project (entry to the Seevak
      Website Competition)",
      language: "JavaScript",
      technology: "JavaScript, HTML, CSS",
      type: "Competition",
      collaborators: "Kimberly Nguyen, Ivanna Lin, Katherine Kerr",
      start_date: ~D[2012-09-01],
      end_date: ~D[2012-06-01],
      img_src: "seevak-jp.jpg",
      demo: "http://www.learntoquestion.com/seevak/groups/2012/sites/jubilee/theproject.html"
    })
    Repo.insert!(%Project{
      title: "Power Up Gambia",
      headline: "A website dedicated to Power Up Gambia (entry to the Seevak
      Website Competition)",
      language: "JavaScript",
      technology: "JavaScript, HTML, CSS",
      type: "Competition",
      collaborators: "Kimberly Nguyen, Ivanna Lin, Christina Huang",
      start_date: ~D[2011-09-01],
      end_date: ~D[2011-06-01],
      img_src: "seevak-pug.jpg",
      demo: "http://www.learntoquestion.com/seevak/groups/2011/sites/power-up-gambia/"
    })
  end

  def insert_skills do
    Repo.delete_all(Skill)

    Repo.insert!(%Skill{name: "Elixir", proficiency: 7, category: "Programming Languages"})
    Repo.insert!(%Skill{name: "Racket", proficiency: 6, category: "Programming Languages"})
    Repo.insert!(%Skill{name: "Java", proficiency: 9, category: "Programming Languages"})
    Repo.insert!(%Skill{name: "Python", proficiency: 6, category: "Programming Languages"})
    Repo.insert!(%Skill{name: "C++", proficiency: 8, category: "Programming Languages"})
    Repo.insert!(%Skill{name: "C", proficiency: 6, category: "Programming Languages"})
    Repo.insert!(%Skill{name: "SQL", proficiency: 7, category: "Programming Languages"})

    Repo.insert!(%Skill{name: "HTML5", proficiency: 10, category: "Web"})
    Repo.insert!(%Skill{name: "CSS", proficiency: 10, category: "Web"})
    Repo.insert!(%Skill{name: "JavaScript", proficiency: 8, category: "Web"})

    Repo.insert!(%Skill{name: "Phoenix", proficiency: 8, category: "Frameworks"})
    Repo.insert!(%Skill{name: "Bootstrap", proficiency: 10, category: "Frameworks"})

    Repo.insert!(%Skill{name: "MySQL", proficiency: 9, category: "Databases"})
    Repo.insert!(%Skill{name: "PostgreSQL", proficiency: 7, category: "Databases"})

    Repo.insert!(%Skill{name: "React", proficiency: 7, category: "Libraries"})
    Repo.insert!(%Skill{name: "jQuery", proficiency: 7, category: "Libraries"})
    Repo.insert!(%Skill{name: "Redux", proficiency: 5, category: "Libraries"})

    Repo.insert!(%Skill{name: "Windows", proficiency: 10, category: "Systems"})
    Repo.insert!(%Skill{name: "Mac OS", proficiency: 10, category: "Systems"})

    Repo.insert!(%Skill{name: "Microsoft Office", proficiency: 10, category: "Software & Tools"})
    Repo.insert!(%Skill{name: "Final Cut Pro X", proficiency: 10, category: "Software & Tools"})
    Repo.insert!(%Skill{name: "iMovie '11", proficiency: 10, category: "Software & Tools"})
    Repo.insert!(%Skill{name: "PowerBuilder", proficiency: 6, category: "Software & Tools"})
    Repo.insert!(%Skill{name: "Git", proficiency: 9, category: "Software & Tools"})
    Repo.insert!(%Skill{name: "Eclipse", proficiency: 7, category: "Software & Tools"})
    Repo.insert!(%Skill{name: "Salesforce", proficiency: 5, category: "Software & Tools"})
  end

  def insert_experiences do
    Repo.delete_all(Experience)

    Repo.insert!(%Experience{
      company: "PowerAdvocate",
      position: "Junior Software Developer",
      location: "Boston",
      start_date: ~D[2018-08-13]
    })
    Repo.insert!(%Experience{
      company: "MCPHS University",
      position: "Application Developer",
      location: "Boston",
      description: "- Automated process of uploading thousands of students’ test scores to Salesforce
      - Generated reports for admissions and housing departments using SQL and PowerBuilder and optimized existing SQL queries to improve performance in report database
      - Cleaned stale data on Salesforce and maintained documents to ensure synchronization across applications daily
      - Configured onboarding platform for human resources department
      - Assisted senior .NET developer in automating student refund service using WinAutomation",
      start_date: ~D[2017-01-04],
      end_date: ~D[2017-08-31]
    })
    Repo.insert!(%Experience{
      company: "Northeastern University",
      position: "Data Administrator",
      location: "Boston",
      description: "- Pioneered development of annotatable database of all the drawings in Henry David Thoreau’s journal
      - Collaborated with team of 12 in data entry and data cleaning",
      start_date: ~D[2016-09-01],
      end_date: ~D[2016-12-07]
    })
    Repo.insert!(%Experience{
      company: "Northeastern University",
      position: "Community Learning Space (CLS) Leader",
      location: "Boston",
      description: "- Supervised and tutored first-year college scholars on various coursework across disciplines",
      start_date: ~D[2015-09-01],
      end_date: ~D[2017-12-07]
    })
    Repo.insert!(%Experience{
      company: "Tufts Medical Center",
      position: "Pulmonary/Rheumatology Department Intern",
      location: "Boston",
      description: "- Oversaw transition of over 100 patient documents from hard copies to electronic
      - Coordinated up to 15 patient appointments each day",
      start_date: ~D[2012-07-01],
      end_date: ~D[2012-08-24]
    })
    Repo.insert!(%Experience{
      company: "826 Boston",
      position: "Tutor",
      location: "Boston",
      description: "- Worked closely with students in grades 6-12 to improve math, science, reading, and writing skills
      - Revised students' compositions to be published in the 826 Boston personal library
      - Encouraged students to develop a positive attitude toward school work",
      start_date: ~D[2014-10-01],
      end_date: ~D[2015-05-01]
    })
  end

  def run do
    insert_projects()
    insert_skills()
    insert_experiences()
  end

  def seed(:dev) do
    run()
  end

  def seed(:prod) do
    run()
  end
end

Seeds.seed(Mix.env)
