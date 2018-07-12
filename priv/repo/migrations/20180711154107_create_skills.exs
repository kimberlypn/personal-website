defmodule PersonalWebsite.Repo.Migrations.CreateSkills do
  use Ecto.Migration

  def change do
    create table(:skills) do
      add :name, :string, null: false
      add :proficiency, :integer, null: false, default: 0
      add :category, :string, null: false

      timestamps()
    end

  end
end
