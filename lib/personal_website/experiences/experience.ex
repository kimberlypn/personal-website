defmodule PersonalWebsite.Experiences.Experience do
  use Ecto.Schema
  import Ecto.Changeset


  schema "experiences" do
    field :company, :string
    field :description, :string
    field :end_date, :date
    field :location, :string
    field :position, :string
    field :start_date, :date

    timestamps()
  end

  @doc false
  def changeset(experience, attrs) do
    experience
    |> cast(attrs, [:company, :position, :location, :description, :start_date, :end_date])
    |> validate_required([:company, :position, :location, :start_date])
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
