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

  def insert_projects do
    Repo.delete_all(Project)

    Repo.insert!(%Project{
      title: "Shambomon",
      language: "Elixir",
      type: "Class",
      collaborators: "Kimberly Nguyen, Matt Dang",
      start_date: ~D[2018-02-20],
      end_date: ~D[2018-03-27],
      img_src: "shambomon.png"
    })
    Repo.insert!(%Project{
      title: "Goat Jumper",
      language: "C++",
      type: "Class",
      collaborators: "Kimberly Nguyen, Max Mindel, Jason Fiammetta, Jerry Leung",
      start_date: ~D[2018-01-30],
      end_date: ~D[2018-04-17],
      img_src: "goat-jumper.png"
    })
    Repo.insert!(%Project{
      title: "TravelPal",
      language: "Elixir",
      type: "Class",
      collaborators: "Kimberly Nguyen, Longsheng Lin, Matt Dang, William Guo",
      start_date: ~D[2018-03-27],
      end_date: ~D[2018-04-20],
      img_src: "travelpal.png"
    })
  end

  def insert_skills do
    Repo.delete_all(Skill)

    Repo.insert!(%Skill{
      name: "Elixir",
      proficiency: 8
    })
    Repo.insert!(%Skill{
      name: "Java",
      proficiency: 10
    })
    Repo.insert!(%Skill{
      name: "HTML",
      proficiency: 10
    })
    Repo.insert!(%Skill{
      name: "CSS",
      proficiency: 10
    })
  end

  def run do
    insert_projects()
    insert_skills()
  end

  def seed(:dev) do
    run()
  end

  def seed(:prod) do
    # run()
  end
end

Seeds.seed(Mix.env)
