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
      technology: "Elixir, Phoenix, HTML, CSS, JavaScript, React, PostgreSQL,
        Node.js",
      type: "Class",
      collaborators: "Kimberly Nguyen, Matt Dang",
      start_date: ~D[2018-02-20],
      end_date: ~D[2018-03-27],
      img_src: "shambomon.png",
      repo: "https://github.com/kimberlypn/Shambomon"
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
      technology: "Elixir, Phoenix, HTML, CSS, JavaScript, React, Redux,
        PostgreSQL, Node.js",
      type: "Class",
      collaborators: "Kimberly Nguyen, Longsheng Lin, Matt Dang, William Guo",
      start_date: ~D[2018-03-27],
      end_date: ~D[2018-04-20],
      img_src: "travelpal.png",
      repo: "https://github.com/kimberlypn/TravelPal"
    })
  end

  def insert_skills do
    Repo.delete_all(Skill)

    Repo.insert!(%Skill{
      name: "Elixir",
      proficiency: 8,
      category: "Programming Language"
    })
    Repo.insert!(%Skill{
      name: "Racket",
      proficiency: 7,
      category: "Programming Language"
    })
    Repo.insert!(%Skill{
      name: "Java",
      proficiency: 10,
      category: "Programming Language"
    })
    Repo.insert!(%Skill{
      name: "Python",
      proficiency: 8,
      category: "Programming Language"
    })
    Repo.insert!(%Skill{
      name: "C++",
      proficiency: 9,
      category: "Programming Language"
    })
    Repo.insert!(%Skill{
      name: "C",
      proficiency: 8,
      category: "Programming Language"
    })
    Repo.insert!(%Skill{
      name: "SQL",
      proficiency: 9,
      category: "Programming Language"
    })
    Repo.insert!(%Skill{
      name: "HTML5",
      proficiency: 10,
      category: "Web"
    })
    Repo.insert!(%Skill{
      name: "CSS",
      proficiency: 10,
      category: "Web"
    })
    Repo.insert!(%Skill{
      name: "JavaScript",
      proficiency: 9,
      category: "Web"
    })
    Repo.insert!(%Skill{
      name: "Phoenix",
      proficiency: 8,
      category: "Framework"
    })
    Repo.insert!(%Skill{
      name: "Bootstrap",
      proficiency: 10,
      category: "Framework"
    })
    Repo.insert!(%Skill{
      name: "MySQL",
      proficiency: 9,
      category: "Database"
    })
    Repo.insert!(%Skill{
      name: "PostgreSQL",
      proficiency: 8,
      category: "Database"
    })
    Repo.insert!(%Skill{
      name: "React",
      proficiency: 9,
      category: "Library"
    })
    Repo.insert!(%Skill{
      name: "jQuery",
      proficiency: 8,
      category: "Library"
    })
    Repo.insert!(%Skill{
      name: "Redux",
      proficiency: 7,
      category: "Library"
    })
  end

  def insert_experiences do
    Repo.delete_all(Experience)

    Repo.insert!(%Experience{
      company: "MCPHS University",
      position: "Application Developer",
      location: "Boston",
      description: "- Automated process of uploading thousands of students’ test scores to Salesforce
      - Generated reports for admissions and housing departments using SQL and PowerBuilder and optimized existing SQL scripts to improve performance in report database
      - Cleaned stale data on Salesforce and maintained documents to ensure synchronization across applications daily
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
