defmodule PersonalWebsite.Projects.Project do
  use Ecto.Schema
  import Ecto.Changeset


  schema "projects" do
    field :collaborators, :string
    field :description, :string
    field :end_date, :date
    field :language, :string
    field :start_date, :date
    field :title, :string
    field :type, :string
    field :img_src, :string

    timestamps()
  end

  @doc false
  def changeset(project, attrs) do
    project
    |> cast(attrs, [:title, :language, :type, :collaborators, :description, :start_date, :end_date, :img_src])
    |> validate_required([:title, :language, :type, :collaborators, :start_date, :img_src])
  end
end
