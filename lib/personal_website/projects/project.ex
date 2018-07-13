defmodule PersonalWebsite.Projects.Project do
  use Ecto.Schema
  import Ecto.Changeset


  schema "projects" do
    field :collaborators, :string
    field :end_date, :date
    field :language, :string
    field :start_date, :date
    field :title, :string
    field :type, :string
    field :img_src, :string
    field :headline, :string
    field :technology, :string
    field :repo, :string

    timestamps()
  end

  @doc false
  def changeset(project, attrs) do
    project
    |> cast(attrs, [:title, :language, :type, :collaborators, :start_date,
    :end_date, :img_src, :headline, :technology, :repo])
    |> validate_required([:title, :language, :type, :collaborators, :start_date,
      :end_date, :img_src])
    |> validate_dates()
  end

  # Compares the start and end dates
  defp validate_dates(changeset) do
    start_date = get_field(changeset, :start_date)
    end_date = get_field(changeset, :end_date)

    compared = Date.compare(start_date, end_date)
    valid_dates?(changeset, compared)
  end

  # Validates if the start date is less than or equal to the end date
  defp valid_dates?(changeset, compared) when compared == :eq or compared == :lt, do: changeset
  defp valid_dates?(changeset, _), do: {:error, "Invalid dates."}
end
