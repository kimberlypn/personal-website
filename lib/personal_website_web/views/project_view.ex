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
      headline: project.headline,
      language: project.language,
      technology: project.technology,
      type: project.type,
      collaborators: project.collaborators,
      start_date: project.start_date,
      end_date: project.end_date,
      img_src: project.img_src,
      repo: project.repo,
      demo: project.demo}
  end
end
