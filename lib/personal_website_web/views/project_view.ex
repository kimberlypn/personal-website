defmodule PersonalWebsiteWeb.ProjectView do
  use PersonalWebsiteWeb, :view
  alias PersonalWebsiteWeb.ProjectView

  def render("index.json", %{projects: projects}) do
    %{data: render_many(projects, ProjectView, "project.json")}
  end

  def render("show.json", %{project: project}) do
    %{data: render_one(project, ProjectView, "project.json")}
  end

  def render("project.json", %{project: project}) do
    %{id: project.id,
      title: project.title,
      language: project.language,
      type: project.type,
      collaborators: project.collaborators,
      description: project.description,
      start_date: project.start_date,
      end_date: project.end_date}
  end
end
