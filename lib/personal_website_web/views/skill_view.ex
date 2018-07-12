defmodule PersonalWebsiteWeb.SkillView do
  use PersonalWebsiteWeb, :view
  alias PersonalWebsiteWeb.SkillView

  def render("index.json", %{skills: skills}) do
    %{data: render_many(skills, SkillView, "skill.json")}
  end

  def render("show.json", %{skill: skill}) do
    %{data: render_one(skill, SkillView, "skill.json")}
  end

  def render("skill.json", %{skill: skill}) do
    %{id: skill.id,
      name: skill.name,
      proficiency: skill.proficiency,
      category: skill.category}
  end
end
