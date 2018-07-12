defmodule PersonalWebsiteWeb.ExperienceView do
  use PersonalWebsiteWeb, :view
  alias PersonalWebsiteWeb.ExperienceView

  def render("index.json", %{experiences: experiences}) do
    %{data: render_many(experiences, ExperienceView, "experience.json")}
  end

  def render("show.json", %{experience: experience}) do
    %{data: render_one(experience, ExperienceView, "experience.json")}
  end

  def render("experience.json", %{experience: experience}) do
    %{id: experience.id,
      company: experience.company,
      position: experience.position,
      location: experience.location,
      description: experience.description,
      start_date: experience.start_date,
      end_date: experience.end_date}
  end
end
