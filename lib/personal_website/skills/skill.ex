defmodule PersonalWebsite.Skills.Skill do
  use Ecto.Schema
  import Ecto.Changeset


  schema "skills" do
    field :name, :string
    field :proficiency, :integer
    field :category, :string

    timestamps()
  end

  @doc false
  def changeset(skill, attrs) do
    skill
    |> cast(attrs, [:name, :proficiency, :category])
    |> validate_required([:name, :proficiency, :category])
    |> validate_number(:proficiency, greater_than: -1)
  end
end
