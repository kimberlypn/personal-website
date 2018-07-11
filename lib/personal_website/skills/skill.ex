defmodule PersonalWebsite.Skills.Skill do
  use Ecto.Schema
  import Ecto.Changeset


  schema "skills" do
    field :name, :string
    field :proficiency, :integer

    timestamps()
  end

  @doc false
  def changeset(skill, attrs) do
    skill
    |> cast(attrs, [:name, :proficiency])
    |> validate_required([:name, :proficiency])
    |> validate_number(:proficiency, greater_than: -1)
  end
end
